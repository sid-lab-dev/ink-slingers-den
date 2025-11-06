# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Sign Up" and create your account
3. Verify your email address

## Step 2: Create a Project

1. After login, click "Create a Project"
2. Name your project (e.g., "Blog App")
3. Click "Create Project"

## Step 3: Create a Database Cluster

1. Click "Create a Deployment"
2. Choose "M0 FREE" tier (free cluster)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to you
5. Give your cluster a name (e.g., "blog-cluster")
6. Click "Create Deployment"

## Step 4: Create Database User

1. In the Security section, go to "Database Access"
2. Click "Create a Database User"
3. Enter username (e.g., "blog_user")
4. Choose "Password" as authentication method
5. Generate a strong password or enter your own
6. Click "Create User"

## Step 5: Allow Network Access

1. Go to "Network Access" in Security section
2. Click "Add IP Address"
3. Either:
   - Click "Allow from anywhere" (for development/testing only)
   - Or add your specific IP address
4. Click "Confirm"

## Step 6: Get Connection String

1. Go back to "Databases"
2. Click "Connect" on your cluster
3. Choose "Drivers" option
4. Select "Node.js" driver
5. Copy the connection string
6. Replace `<username>` and `<password>` with your database user credentials
7. The URL should look like:
   ```
   mongodb+srv://blog_user:<password>@blog-cluster.xxxxx.mongodb.net/blog-db?retryWrites=true&w=majority
   ```

## Step 7: Update Backend Environment Variables

1. Open `backend/.env`
2. Update the MONGODB_URI with your connection string:
   ```
   MONGODB_URI=mongodb+srv://blog_user:<password>@blog-cluster.xxxxx.mongodb.net/blog-db?retryWrites=true&w=majority
   ```

## Collections That Will Be Created Automatically

When you start the backend server, these collections will be automatically created:

1. **users** - Store user accounts
   - name, email, password (hashed)
   - role (user/admin)
   - timestamps

2. **articles** - Store blog articles
   - title, slug, excerpt, content
   - coverImage, category, tags
   - author (reference to user)
   - published, views, readTime
   - timestamps

3. **categories** - Store article categories
   - name, slug, description
   - articleCount
   - timestamps

## Verification

After starting the backend server, you can verify collections in MongoDB Atlas:

1. Go to your MongoDB Atlas dashboard
2. Click "Browse Collections"
3. You should see your `blog-db` database with the three collections

## Security Best Practices

- Never commit your connection string to git
- Use strong passwords for database users
- For production, use specific IP whitelisting instead of "Allow from anywhere"
- Rotate credentials periodically
- Enable encryption at rest (included in paid tiers)
