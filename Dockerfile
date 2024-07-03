# Use an official Node.js runtime as a parent image
FROM node:20-alpine

RUN echo "Starting the build process"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variable
ENV PORT=${PORT}

# Expose the port the app runs on
EXPOSE ${PORT}

# Define the command to run the app
CMD ["node", "app.js"]