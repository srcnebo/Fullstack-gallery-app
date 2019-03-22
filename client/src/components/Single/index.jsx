import React from 'react';
import Comments from '../Comments';
import './style.css';

const Single = ({
  posts,
  match,
  handleDeleteOnePost,
  addComment,
  profile,
  comments
}) => {
  const id = match.params.postId;

  const post = posts
    ? posts
        .filter(post => post._id === id)
        .map(post => {
          return (
            <div className="single-photo" key={post._id}>
              <div className="single-photo__postedby">
                <img
                  src={post.postedBy.profilepic}
                  alt="avatar"
                  className="single-post__avatar-image"
                />
                <span>{post.postedBy.username}</span>
              </div>
              <img
                src={`../${post.imgUrl}`}
                alt={post.caption}
                className="single-post__image"
              />

              <p className="single-post__caption">
                <div>
                  <span className="single-post__author">
                    {post.postedBy.username}
                  </span>
                  -{post.caption}
                </div>
                <button
                  onClick={() => handleDeleteOnePost(post._id)}
                  className="btn delete-btn"
                >
                  Delete
                </button>
              </p>
              <div className="single-post__comments">
                <Comments
                  postId={id}
                  addComment={addComment}
                  profile={profile}
                  postComments={comments[id]}
                />
              </div>
            </div>
          );
        })
    : null;

  return (
    <>
      <div className="single-container">{post}</div>
      {/* <Comments
        postId={id}
        addComment={addComment}
        profile={profile}
        postComments={comments[id]}
      /> */}
    </>
  );
};

export default Single;
