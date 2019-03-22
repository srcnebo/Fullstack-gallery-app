const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const multer = require("multer");

// for uploading
const fileFilter = (req, file, cb) => {
  // reject file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

router.get("/", (req, res) => {
  Post.find({})
    .then(data => res.json(data))
    .catch(error => res.json({ error }));
});

router.post("/", upload.single("imgUrl"), (req, res) => {
  const post = new Post({
    caption: req.body.caption,
    imgUrl: req.file.path,
    postedBy: {
      username: req.body.username,
      userId: req.body.userId,
      profilepic: req.body.profilepic,
    },
  });
  post
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ error }));
});

router.get("/:postId", (req, res) => {
  const _id = req.params.postId;
  Post.findById({ _id })
    .then(data => res.json(data))
    .catch(error => res.json({ error }));
});

router.put("/:postId", (req, res) => {
  console.log("...Testing put request...");
  res.send({ type: "PUT" });
});

router.delete("/:postId", (req, res) => {
  const _id = req.params.postId;
  Post.deleteOne({ _id })
    .then(() => res.json({ _id }))
    .catch(error => res.json({ error }));
});

router.delete("/", (req, res) => {
  Post.remove({}).then(() => res.json({ data: "data has been removed" }));
});
module.exports = router;
