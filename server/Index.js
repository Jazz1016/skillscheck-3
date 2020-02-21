require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const authCtrl = require("./controllers/AuthController");
const Ctrl = require("./controllers/Controller");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT || 4041, () =>
    console.log(`Server running on ${SERVER_PORT}`)
  );
  console.log("Database connected");
});
//AUTH ENDPOINTS
app.post(`/api/auth/register`, authCtrl.register);
app.post(`/api/auth/login`, authCtrl.login);

//POST ENDPOINTS
app.get(`/api/posts/:id`, Ctrl.allUserPosts);
app.get(`/api/posts`, Ctrl.allPosts);
app.post(`/api/posts/:id`, Ctrl.newPost);
app.get(`/api/post/:id`, Ctrl.onePost);
app.get(`/api/posts`, Ctrl.searchPosts);
