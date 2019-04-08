import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const PostList = ({ posts }) => {
  return (
    <div className="postlist container">
      {posts &&
        posts
          .map(post => (
            <Link to={post._id && `posts/${post._id}`} key={post._id}>
              <div className="postlist__card">
                <img
                  src={`../${post.imgUrl}`}
                  alt="post"
                  className="postlist__card__image"
                />
              </div>
            </Link>
          ))
          .reverse()}
    </div>
  );
};

export default PostList;
