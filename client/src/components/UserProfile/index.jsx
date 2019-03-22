import React from 'react';
import './style.css';

const UserProfile = ({ profile, posts }) => {
  return (
    <>
      <div className="user-info container">
        <img src={profile.avatar} alt="avatar" className="profile-photo" />
        <h2 className="username">
          Welcome to your profile <br />
          {profile.username}
        </h2>
      </div>
      <div className="postlist container">
        {posts.map(
          post =>
            post.postedBy.userId === profile._id && (
              <div className="postlist__card">
                <img
                  src={post.imgUrl}
                  alt="post"
                  className="postlist__card__image"
                />
                {/* <span>{post.caption}</span>
                    <span>Author:{post.postedBy.username}</span> */}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default UserProfile;
