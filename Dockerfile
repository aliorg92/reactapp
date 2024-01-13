# Build stage
FROM node:latest AS build

# Set working directory
WORKDIR /app

COPY package*.json ./ 

RUN npm install --no-audit 

COPY . .


RUN npm run build

# Production stage
FROM nginx:latest

# Remove default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/*

# Copy Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/

# Copy built application files from the build stage
COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
