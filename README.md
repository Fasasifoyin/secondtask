1. Create Node.JS Server
   1. run npm init -y in root folder
   2. npm install packages (express, nodemon, mongoose, cors, dotenv, express-async-handler)
   3. Create index.js file
   4. Update package.json by setting "type": "module", and "start": "nodemon index.js"

2. Connect to MongoDb
   1. Create a new project on Mongodb
   2. Create a .env file
   3. Copy connection string and paste in .env file
   4. Input the right password in the connection string
   5. On index.js file connect to mongodb with mongoose
   6. Run npm start

3. Creating api
   1. Create user model
   2. Create controllers
   3. Create CRUD routes
   4. use route in index.js
