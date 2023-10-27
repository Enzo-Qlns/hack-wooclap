FROM python:3.11

ENV CONTAINER_HOME=/var/www
WORKDIR $CONTAINER_HOME

# Met a l'heure le container
ENV TZ=Europe/Paris
RUN apt install tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD requirements.txt .

# keep the parent server directory structure for relative imports
RUN mkdir server
ADD ./ $CONTAINER_HOME/server

RUN pip install --no-cache-dir -r requirements.txt