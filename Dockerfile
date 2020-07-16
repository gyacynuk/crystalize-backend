FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Copy over app dependencies
COPY package.json yarn.lock ./

# Install dependancies
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 80

CMD ["yarn", "start-prod"]
