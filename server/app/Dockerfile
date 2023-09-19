FROM python:3.11

ENV CONTAINER_HOME=/var/www
WORKDIR $CONTAINER_HOME

ADD requirements.txt .
ADD .env .

# keep the parent server directory structure for relative imports
RUN mkdir server
ADD ./ $CONTAINER_HOME/server

RUN pip install --no-cache-dir -r requirements.txt