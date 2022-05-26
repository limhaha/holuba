FROM node:14.17.5-alpine3.14 as builder

WORKDIR '/usr/src/app'

COPY package.json ./

RUN npm install

COPY ./ ./

# ENV CHOKIDAR_USEPOLLING=true

RUN npm run build

#nginx base image
FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html