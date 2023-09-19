FROM debian

RUN apt-get update && apt-get install -y nginx

COPY nginx/ssl /etc/nginx/conf.d/

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/app.taskme.fr.conf /etc/nginx/conf.d/default.conf
COPY client/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]