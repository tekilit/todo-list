const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const todosRoute = require("./routes/todos")

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use('/todos', todosRoute)


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT}`);
});




