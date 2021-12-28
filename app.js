const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();


require ('./routes/users.routes')(app)
require ('./routes/users_company.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// require ('./routes/users.routes')(app)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});