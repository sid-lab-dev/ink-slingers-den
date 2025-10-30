import Article from '../models/Article.js';

export const getArticles = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    const query = { published: true };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$text = { $search: search };
    }

    const articles = await Article.find(query)
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Article.countDocuments(query);

    res.json({
      articles,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug }).populate(
      'author',
      'name email'
    );

    if (article) {
      article.views += 1;
      await article.save();
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    const article = await Article.create({
      ...req.body,
      author: req.user._id,
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this article' });
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this article' });
    }

    await article.deleteOne();
    res.json({ message: 'Article removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeaturedArticles = async (req, res) => {
  try {
    const articles = await Article.find({ published: true })
      .populate('author', 'name email')
      .sort({ views: -1 })
      .limit(5);

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
