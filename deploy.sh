#!/bin/bash

FOLDER_NAME="API-ML"
DATABASE_PUBLIC_IP="YOUR_DATABASE_PUBLIC_IP"
DATABASE_PASSWORD="YOUR_DATABASE_PASSWORD"
DATABASE_NAME="YOUR_DATABASE_NAME"
API_KEY="YOUR_API_KEY"

mv "$FOLDER_NAME" ../

echo "runtime: nodejs18" > ./app.yaml
echo "service: backend" >> ./app.yaml
echo "" >> ./app.yaml
echo "env_variables:" >> ./app.yaml
echo "  PORT: \"8080\"" >> ./app.yaml
echo "  DB_HOST: \"$DATABASE_PUBLIC_IP\"" >> ./app.yaml
echo "  DB_USER: \"root\"" >> ./app.yaml
echo "  DB_PASSWORD: \"$DATABASE_PASSWORD\"" >> ./app.yaml
echo "  DB_NAME: \"$DATABASE_NAME\"" >> ./app.yaml
echo "  SECRET_KEY: \"$API_KEY\"" >> ./app.yaml


echo "PORT=8080" > ./.env
echo "DB_HOST=$DATABASE_PUBLIC_IP" >> ./.env
echo "DB_USER=root" >> ./.env
echo "DB_PASSWORD=$DATABASE_PASSWORD" >> ./.env
echo "DB_NAME=$DATABASE_NAME" >> ./.env
echo "SECRET_KEY=$API_KEY" >> ./.env


gcloud app deploy 

cd ..

cd API-ML

echo "runtime: custom" > ./app.yaml
echo "service: machinelearning" >> ./app.yaml
echo "env: flex" >> ./app.yaml
echo "" >> ./app.yaml
echo "runtime_config:" >> ./app.yaml
echo "  operating_system: \"ubuntu22\"" >> ./app.yaml
echo "  runtime_version: \"3.11\"" >> ./app.yaml
echo "" >> ./app.yaml
echo "resources:" >> ./app.yaml
echo "  cpu: 2" >> ./app.yaml
echo "  memory_gb: 8" >> ./app.yaml
echo "  disk_size_gb: 30" >> ./app.yaml
echo "" >> ./app.yaml
echo "automatic_scaling:" >> ./app.yaml
echo "  max_num_instances: 1" >> ./app.yaml
echo "readiness_check:" >> ./app.yaml
echo "  app_start_timeout_sec: 1800" >> ./app.yaml

git clone https://github.com/ultralytics/yolov5.git

gcloud config set app/cloud_build_timeout 1800

gcloud app deploy
