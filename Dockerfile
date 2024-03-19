FROM node:20-alpine

# Establecer la variable de entorno NODE_ENV
ENV NODE_ENV=prod

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","start"]
