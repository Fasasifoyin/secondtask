# HNG Second Task

This is a readme file for the HNG Second Task

## Table of Contents

* [About](#about)
* [Getting Started](#start)
* [Connect to mongodb](#mongo)
* [API USAGE](#usage)

### <a name="about">About</a> 
A simple REST API capable of CRUD operations on a "person" resource

### <a name="start">Getting Started</a> 
- Clone the repo: **`git clone https://github.com/Fasasifoyin/secondtask.git`**
- After cloning, install packages with: **`npm install`** 

### <a name="mongo">Connect to mongodb</a> 
- Create a new project on mongodb
- Copy connection string
- Create a .env file
- Create a variable "**MONGO_URL**" in the .env file and paste in connection string
- Input the right password in the connection string
- Start project - **`npm start`**

#### You should get "**App Connected**" message and your server will run on "**localhost:7070**"

### <a name="usage">API USAGE</a> 
The base url for the api usage locally is `localhost:7070/api`

- CREATE - endpoint for creating a new person `/create`. A key "**name**" with a value which should be in **STRING** should be passed through the request body
- DELETE - endpoint for deleting a person `/delete/<name>`. The name to be deleted is passed as a parameter(not case sensitive)
- READ - endpoint to get a specific person `/get/<name>`. The name to find is passed as a parameter(not case sensitive)
- UPDATE - endpoint to update a person `/update/<name>`. The name to update is passed as a parameter(not case sensitive). A key "**name**" with a value which should be in **STRING** should also be passed through the request body
