const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000
const db = require('./db')
const taskRouter = require('./routes/task-routes')


const app = express();

app.use(cors());


db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/api', taskRouter)

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
})