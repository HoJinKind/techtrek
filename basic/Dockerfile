FROM node:13.12.0-alpine



# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Bundle app source
COPY . .

WORKDIR /client/my-app



RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

WORKDIR ../../backend
RUN yarn install
EXPOSE 3000
EXPOSE 5000
CMD [ "yarn", "start" ]