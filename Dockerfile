# When running this container in production you need to provide the
# PROD_POSTGRES_ADMIN_PASSWORD environment variable
FROM node:11
WORKDIR app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8080
