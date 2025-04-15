# ============================
# Build Stage
# ============================
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files and build
COPY . .
RUN npm run build


# ============================
# Production Stage
# ============================
FROM nginx:stable-alpine AS production

# Clean default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from React app
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
