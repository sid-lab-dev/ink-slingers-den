import express from 'express';
import {
  getArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
  getFeaturedArticles,
} from '../controllers/articleController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/featured', getFeaturedArticles);
router.get('/:slug', getArticleBySlug);
router.post('/', protect, createArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

export default router;
