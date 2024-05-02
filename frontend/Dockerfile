# Use the official Node.js image as base
FROM node:14 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Use lightweight Nginx image to serve the React app
FROM nginx:alpine

# Copy build files from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
