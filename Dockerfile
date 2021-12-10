FROM node:14

WORKDIR /nodejs-express-mongodb
COPY package.json .
RUN npm install
COPY . .
CMD npm start