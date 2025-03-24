# React Reports

A simple React app for visualizing campaign recommendations, built with Next.js and ready for deployment to Vercel.

## Project Overview

This application displays marketing campaign recommendations with impact and effort indicators. It's built using:

- Next.js (React framework)
- TypeScript
- Tailwind CSS

## Deployment to Vercel

This project is configured for seamless deployment to Vercel. Follow these steps to deploy:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in (you can use your GitHub account)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect that this is a Next.js project
   - Click "Deploy"

Vercel will automatically build and deploy your application. Once deployed, you'll receive a URL where your app is live.

## Local Development

If you want to run this project locally:

1. Install Node.js and npm
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components, including the RecommendationsVisualization
- `/public` - Static assets

## Customization

To customize the recommendations, edit the data array in `/src/components/RecommendationsVisualization.tsx`.
