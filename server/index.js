const express = require('express');
const app = express();
const cors = require('cors');
const todoRoute = require('./routes/todoRoute.js');
require('dotenv').config();


app.use(express.json());
app.use(cors());

// this is our HTTP method that used for getting resource from server
// can display at browser
app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send("Welcome to PERN stack !!!");
});

// app.use('/todos', todoRoute)
app.use('/about', (req, res) => {
    res.send('Welcome to about page')
})

const server = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server has started on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

// 启动服务器
server();