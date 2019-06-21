FROM node:11.1-alpine

EXPOSE 3000

WORKDIR /app

COPY . /app

RUN npm install -g serve

RUN npm install --silent

RUN chmod +x /app/run

CMD ["/app/run"]
