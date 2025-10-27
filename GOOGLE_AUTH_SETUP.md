# Google Authentication Setup Guide

This guide will help you configure Google OAuth in your Supabase project.

## Prerequisites

- A Supabase project (already configured)
- A Google Cloud Platform account

## Steps

### 1. Set up Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Configure the OAuth consent screen if you haven't already:
   - Choose "External" user type
   - Fill in the required application information
   - Add test users if needed during development
6. Select "Web application" as the application type
7. Add your authorized redirect URIs:
   - For local development: `http://localhost:5173`
   - For production: Your production URL
   - **Important**: Add your Supabase callback URL: `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`
8. Copy your Client ID and Client Secret

### 2. Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Navigate to "Authentication" > "Providers"
4. Find "Google" in the list and click to enable it
5. Paste your Google Client ID and Client Secret
6. Save the configuration

### 3. Update Site URL (if needed)

1. In Supabase Dashboard, go to "Authentication" > "URL Configuration"
2. Set your Site URL to match your application URL:
   - Development: `http://localhost:5173`
   - Production: Your production domain
3. Add any additional redirect URLs if needed

### 4. Test the Integration

1. Run your application
2. Navigate to the Sign In page (`/signin`)
3. Click "Continue with Google"
4. You should be redirected to Google's OAuth consent screen
5. After authentication, you'll be redirected back to your app

## Features Implemented

- Google OAuth Sign-In
- Email/Password Authentication
- User Session Management
- Protected Routes with Authentication State
- User Profile Display with Avatar
- Sign Out Functionality

## Usage in Code

The authentication is managed through the `AuthContext` provider:

```javascript
import { useAuth } from '@/contexts/AuthContext';

const { user, signInWithGoogle, signOut } = useAuth();
```

## Security Notes

- Never commit your Google Client Secret to version control
- Keep your Supabase API keys secure
- Always use HTTPS in production
- Regularly review and update OAuth scopes and permissions
