# Use Node.js as the base image
FROM node:latest AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vite app
RUN npm run build

# Use nginx as the base image for serving the build files
FROM nginx:latest

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports 80 and 443
EXPOSE 80
EXPOSE 443

# Install Certbot and nginx plugin
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a directory for Certbot
RUN mkdir -p /etc/letsencrypt/live/kalanjali.blr.amrita.edu

# Add script to obtain SSL certificate using Certbot
COPY server_files/certbot_script.sh /usr/local/bin/certbot_script.sh
RUN chmod +x /usr/local/bin/certbot_script.sh

# Run the Certbot script to obtain SSL certificate
RUN /usr/local/bin/certbot_script.sh

COPY server_files/fullchain.pem /etc/letsencrypt/live/kalanjali.blr.amrita.edu/fullchain.pem
COPY server_files/privkey.pem /etc/letsencrypt/live/kalanjali.blr.amrita.edu/privkey.pem

# Move nginx configuration file
COPY server_files/nginx-server.conf /etc/nginx/conf.d/default.conf

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]