# Deployment Guide – All IndiaMART

## Local Setup
1. Install Node.js and npm
2. Run `npm install`
3. Setup `.env` with your Firebase details.
4. Run `npm start`

## Deploy to Vercel/Netlify
1. Push your code to GitHub.
2. Connect your repo to Vercel or Netlify dashboard.
3. Add all your `.env` variables in the dashboard’s environment section.
4. Deploy!

## Firebase Hosting (Optional)
1. Install Firebase CLI: `npm i -g firebase-tools`
2. Run `firebase login`
3. Run `firebase init` inside your project, select "Hosting"
4. Build your app: `npm run build`
5. Deploy: `firebase deploy`