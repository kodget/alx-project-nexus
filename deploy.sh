#!/bin/bash

echo "🚀 Starting Distinct Patterns deployment..."

# Navigate to main project
cd distinct-pattern

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment to Vercel"
    echo "Run: vercel --prod"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"