const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const SessionStore = require("express-session-sequelize")(expressSession.Store);
const PORT = process.env.PORT || 3001;

const Sequelize = require("sequelize");
const routes = require("./routes/api-routes");

const Todo = require("./models/todo");
const { sequelize } = require("./models/todo");
const router = require("./routes/api-routes");

const myDatabase = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const sequelizeSessionStore = new SessionStore({
  db: myDatabase,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(
  expressSession({
    secret: "keep it secret, keep it safe.",
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

function myFunction() {
  var x = document.getElementById("table").value;
  document.getElementById("tnumber").innerHTML = x;
}
myFunction();

app.use(router);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}!`);
  });
});
