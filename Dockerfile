# Use an official base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Copy application files (if any)
COPY . .

# Install dependencies (example: bash)
RUN npm install

# Expose a port (optional)
EXPOSE 3000

# Default command
CMD npm run dev