# FROM node:12 AS build-stage
# WORKDIR /react-app
# COPY react-app/. .

# Build our React App
# RUN npm install
# RUN npm run build

FROM python:3.9
ENV REACT_APP_BASE_URL=https://chatter-with-us.herokuapp.com/

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True


EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY /react-app/build/* app/static/


# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Run flask environment
CMD gunicorn --worker-class eventlet -w 1 app:app
# CMD gunicorn app:app
