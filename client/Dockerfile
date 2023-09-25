# Utilisez l'image de base node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json dans le conteneur
COPY ./package*.json ./

# Installer les dépendances du client React
RUN npm install

# Copier tout le contenu du répertoire client dans le conteneur
COPY ./ ./

# Exposer le port sur lequel le client React s'exécute
EXPOSE 3000

# Commande pour démarrer le client React
CMD ["npm", "start"]
