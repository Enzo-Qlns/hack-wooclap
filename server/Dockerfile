# Utilisez l'image de base Python
FROM python:3.11

# Définir le répertoire de travail
WORKDIR /app

# Copier le requirements.txt dans le conteneur
COPY ./app/requirements.txt ./

# Installer les dépendances du serveur Python
RUN pip install -r requirements.txt

# Copier tout le contenu du répertoire server dans le conteneur
COPY ./app ./

# Exposer le port sur lequel le serveur API Python s'exécute
EXPOSE 5002

# Commande pour démarrer le serveur API Python
CMD ["python", "app.py"]
