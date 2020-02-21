const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");

    let user = await db.check_user([username]);
    console.log(user);
    user = user[0];

    if (!user) {
      return res.status(400).send("Username not found!");
    }

    const authenticated = bcrypt.compareSync(password, user.password);
    if (authenticated) {
      delete user.password;
      session.user = user;
      res.status(202).send(session.user);
    } else {
      res.status(401).send("Incorrect Password");
    }
  },

  //   async (req, res) => {
  //     const { email, password } = req.body;
  //     const { session } = req;
  //     const db = req.app.get("db");
  //     let user = await db.check_user([email]);
  //     user = user[0];
  //     if (!user) {
  //       return res.status(400).send("Email not found");
  //     }

  //     const authenticated = bcrypt.compareSync(password, user.user_password);
  //     if (authenticated) {
  //       delete user.user_password;
  //       session.user = user;
  //       res.status(202).send(session.user);
  //     } else {
  //       res.status(401).send("Incorrect Password");
  //     }
  //   }

  register: async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const { session } = req;
    const defaultPic =
      "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg";
    const db = req.app.get("db");

    let user = await db.check_user([username]);
    user = user[0];
    // console.log(user);
    if (user) {
      return res.status(400).send("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);

    let newUser = await db.register_user([username, hash, defaultPic]);
    console.log(newUser);
    newUser = newUser[0];

    session.user = newUser;
    res.status(201).send(session.user);

    // const { email, password } = req.body;
    // const { session } = req;
    // const db = req.app.get("db");

    // let user = await db.check_user([email]);
    // user = user[0];
    // if (user) {
    //   return res.status(400).send("User already exists");
    // }

    // const salt = bcrypt.genSaltSync(20);
    // const hash = bcrypt.hashSync(password, salt);

    // let newUser = await db.register_user({ hash, email });
    // newUser = newUser[0];
    // session.user = newUser;
    // res.status(201).send(session.user);
  }
};
