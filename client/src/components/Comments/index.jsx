import React, { Component } from 'react';
import './style.css';

class Comments extends Component {
  author = React.createRef();
  comment = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const postId = this.props.postId;
    const author = this.props.profile.username;
    const avatar = this.props.profile.avatar;
    const comment = this.comment.current.value;
    this.props.addComment(author, avatar, comment, postId);
    e.currentTarget.reset();
  };

  renderComments = () => {
    return (
      this.props.postComments &&
      this.props.postComments.map((comment, i) => (
        <li
          className="collection-item avatar grey lighten-4 comment-list"
          key={i}
          style={{ margin: '2rem auto', width: '95%' }}
        >
          <p>
            <img
              src={comment.avatar}
              alt="avatar"
              style={{ borderRadius: '50%', width: '40px' }}
            />
            <div className="single-comment">
              <span style={{ fontWeight: 'bold' }}>{comment.user}</span> -
              {comment.comment}
            </div>
          </p>
        </li>
      ))
    );
  };
  render() {
    return (
      <div className="comments">
        <ul className="collection">
          {this.renderComments()}
          <form
            onSubmit={this.handleSubmit}
            style={{ margin: '2rem auto', width: '95%' }}
          >
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="comments"
              ref={this.comment}
            />
            <button type="submit">Add Comment</button>
          </form>
        </ul>
      </div>
    );
  }
}
export default Comments;
