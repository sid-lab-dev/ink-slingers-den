import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Please provide an excerpt'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    coverImage: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: ['Technology', 'Design', 'Travel', 'Lifestyle', 'Business', 'Other'],
    },
    tags: [{
      type: String,
      trim: true,
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
  },
  {
    timestamps: true,
  }
);

articleSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

const Article = mongoose.model('Article', articleSchema);

export default Article;
