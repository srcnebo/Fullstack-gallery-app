import React, { Component } from "react";

import "./style.css";

class AddForm extends Component {
  caption = React.createRef();
  state = {
    imgUrl: null,
  };

  fileSelectedHandler = event => {
    this.setState({ imgUrl: event.target.files[0] });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("imgUrl", this.state.imgUrl);
    data.append("caption", this.caption.current.value);
    data.append("username", this.props.profile.username);
    data.append("userId", this.props.profile._id);
    data.append("profilepic", this.props.profile.avatar);

    this.props.addPost(data);
    console.log(data);
    this.props.history.push("/profile");
  };
  render() {
    return (
      <div className="addform__container">
        <form onSubmit={this.handleSubmit} method="POST" className="">
          <div className="form-row">
            <div className="form__input-group">
              <label htmlFor="imgUrl">Select Image:</label>
              <input
                type="file"
                name="fileToUpload"
                id="fileToUpload"
                onChange={this.fileSelectedHandler}
              />
            </div>
            <div className="form__input-group">
              <label htmlFor="summary">Caption:</label>
              <textarea
                name="caption"
                id="caption"
                ref={this.caption}
                className="form-control"
                rows="4"
              />
            </div>
          </div>
          <div className="form-row" />

          <button type="submit" className="btn add-btn">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
