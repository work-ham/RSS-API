#!/bin/bash

FOLDER_NAME="API-ML"


mv "$FOLDER_NAME" ../


echo "runtime: nodejs18" > ../app.yaml
echo "service: backend" >> ../app.yaml
echo "" >> ../app.yaml
echo "env_variables:" >> ../app.yaml
echo "  PORT: \"8080\"" >> ../app.yaml
echo "  DB_HOST: \"YOUR_DATABASE_PUBLIC_IP\"" >> ../app.yaml
echo "  DB_USER: \"root\"" >> ../app.yaml
echo "  DB_PASSWORD: \"YOUR_DATABASE_PASSWORD\"" >> ../app.yaml
echo "  DB_NAME: \"YOUR_DATABASE_NAME\"" >> ../app.yaml
echo "  SECRET_KEY: \"YOUR_API_KEY\"" >> ../app.yaml


echo "PORT=8080" > ../.env
echo "DB_HOST=YOUR_DATABASE_PUBLIC_IP" >> ../.env
echo "DB_USER=root" >> ../.env
echo "DB_PASSWORD=YOUR_DATABASE_PASSWORD1" >> ../.env
echo "DB_NAME=YOUR_DATABASE_NAMA" >> ../.env
echo "SECRET_KEY=YOUR_API_KEY" >> ../.env


gcloud app deploy 

cd ..

cd API-ML

gcloud config set app/cloud_build_timeout 1800

gcloud app deploy