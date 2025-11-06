import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Article from '../models/Article.js';
import Category from '../models/Category.js';

dotenv.config();

const initializeDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    console.log('Creating indexes...');

    await User.collection.createIndex({ email: 1 }, { unique: true });
    console.log('✓ User indexes created');

    await Article.collection.createIndex({ slug: 1 }, { unique: true });
    await Article.collection.createIndex({ title: 'text', content: 'text', excerpt: 'text' });
    await Article.collection.createIndex({ category: 1 });
    await Article.collection.createIndex({ author: 1 });
    await Article.collection.createIndex({ published: 1 });
    console.log('✓ Article indexes created');

    await Category.collection.createIndex({ name: 1 }, { unique: true });
    await Category.collection.createIndex({ slug: 1 }, { unique: true });
    console.log('✓ Category indexes created');

    console.log('\n✓ Database initialized successfully!');
    console.log('\nCollections created:');
    console.log('  - users');
    console.log('  - articles');
    console.log('  - categories');

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error initializing database:', error.message);
    process.exit(1);
  }
};

initializeDB();
