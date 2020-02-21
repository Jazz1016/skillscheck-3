module.exports = {
  allUserPosts: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db
      .get_posts([id])
      .then(posts => {
        console.log(posts);
        res.status(200).send(posts);
      })
      .catch(() => console.log("error getting posts"));
  },
  newPost: async (req, res) => {
    console.log(req.body, req.params);
    const { id } = req.params;
    const { title, img, content } = req.body;
    const db = req.app.get("db");

    await db
      .new_post([id, title, img, content])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  },
  onePost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    let post = await db.get_post(id);
    post = post[0];
    if (post) {
      res.status(200).send(post);
    } else {
      res.sendStatus(404);
    }
  },
  allPosts: async (req, res) => {
    const db = req.app.get("db");
    await db
      .get_all_posts()
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(() => console.log("error sending all posts"));
  }
};
