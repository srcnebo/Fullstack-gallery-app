const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  caption: String,
  imgUrl: String,
  postedBy: {
    username: String,
    userId: String,
    profilepic: String
  }

  // comments: [
  //   {
  //     text: String,
  //     postedBy: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'User'
  //     }
  //   }
  // ],
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = mongoose.model('Post', postSchema);
