#!/bin/bash
# Pull latest changes from GitHub
git pull origin main

# Reload the Node.js app with PM2
pm2 reload node-app

echo "✅ Deployment complete at $(date)"
