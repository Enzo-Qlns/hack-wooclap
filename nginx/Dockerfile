FROM debian

# Installation de nginx
RUN apt-get update && apt-get install -y nginx curl

# Met a l'heure le container
ENV TZ=Europe/Paris
RUN apt install tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Supprime tous les fichiers de conf par default
RUN rm -f /etc/nginx/conf.d/* /etc/nginx/sites-available/* /etc/nginx/sites-enabled/*

# Ajoute les differents fichier de conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/hack-wooclap.conf /etc/nginx/conf.d/default.conf

# Ajoute le bulid
COPY client/build /usr/share/nginx/html

# Commande de lancement de nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
