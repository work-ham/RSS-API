# You are now in the Cloud Computing repository of RSS(Road Sign Spotter)-sql-rest-api.

## What is this repository about?

Hello and welcome to RSS(Road Sign Spotter)-sql-rest-api project repository for the cloud computing! 

As the we mentioned before, this repository is used as the primary working repository for cloud computing side of the RSS(Road Sign Spotter) project done as part of Bangkit 2023's Product-based Capstone Project built in Node JS with Express JS and Python with Flask.
<p align="right">(<a href="#top">back to top</a>)</p>

### This applications built with

* [Express JS](https://expressjs.com/)
* [Flask](https://flask.palletsprojects.com/en/2.3.x/)
* other libraries included in "package.json" and "requirements.txt" file

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Before replicating this project, make sure you have [Git](https://git-scm.com/downloads) installed on your computer.

### Prerequisites

Open your terminal and install the latest Node Package Manager and pip
* npm
  ```sh
  npm install npm@latest -g
  ```
* pip
  ```sh
  pip install -r requirements.txt
  ```
### Installation RSS(Road Sign Spotter) rest API
_Below is an example of how this app will be deployed with app engine this is how the installation_
1. Go to [Google Cloud Platform](https://console.cloud.google.com/)
2. Open Cloudshell
3. Clone the repository
   ```sh
   git clone https://github.com/work-ham/RSS-API.git
   ```
5. Go to search field and search for SQL service
6. Create an Instance, and choose mySQL
7. select MySQL 5.7 for Database version
8. Click on "show configuration option and select "machine type"
9. Click the drop down box and choose standard machine (1 vCPU, 3.75 GB)
10. Storage type SSD and select the capacity 10GB. Don't forget to checklist "Enable automatic storage increases"
11.  Expand the connections setting, checklist on public IP then click add network, fill the network with "0.0.0.0/0", click done.
12.  And create Instance
13.  In Cloud Sql Overview click on "OPEN CLOUD SHELL" hit ENTER and you will ask to input your database password
14.  Create your database with
     >> CREATE DATABASE DATABASE_NAME;
16.  Open your database in mysql
17.  Create table with sql query in "database.sql"
18.  Exit from mysql 
19.  Move to API-RSS Directory with:
     ```sh
     cd RSS-API
     ```
21.  Click on Open Editor open deploy.sh and change to your configuration:
     >> DATABASE_PUBLIC_IP="YOUR_DATABASE_PUBLIC_IP" <br>
     >> DATABASE_PASSWORD="YOUR_DATABASE_PASSWORD"<br>
     >> DATABASE_NAME="YOUR_DATABASE_NAME"<br>
     >> API_KEY="YOUR_API_KEY"<br>
23.  Open Terminal give permission to run deploy.sh in cloudshell terminal:
     ```sh
     sudo chmod +x deploy.sh
     ```
24.  Run deploy.sh with:
     ```sh
     ./deploy.sh
     ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
### Contact
Ilham - [Github](https://github.com/work-ham), [LinkedIn](https://www.linkedin.com/in/ilham-kus/) <br>
Wawan - [Github](https://github.com/wawn11), [LinkedIn](https://www.linkedin.com/in/wawan11/)
<p align="right">(<a href="#top">back to top</a>)</p>