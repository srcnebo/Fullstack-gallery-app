import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "./store/actions/actions";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import Single from "./components/Single";
import PostList from "./components/PostList";
import AddForm from "./components/AddForm";

import "./App.css";

class App extends Component {
  handleDeleteOnePost = id => {
    this.props.deletePost(id);
    this.props.history.push("/");
  };
  componentDidMount() {
    this.props.fetchProfile();
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar profile={this.props.profile} />
        </header>
        <main>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/posts/newpost"
              render={props => <AddForm addPost={this.props.addPost} profile={this.props.profile} {...props} />}
            />
            <Route path="/profile" render={() => <UserProfile profile={this.props.profile} posts={this.props.posts} />} />
            <Route path="/" exact render={() => <PostList posts={this.props.posts} profile={this.props.profile} />} />
            <Route
              path="/posts/:postId"
              render={props => (
                <Single
                  posts={this.props.posts}
                  profile={this.props.profile}
                  comments={this.props.comments}
                  {...props}
                  handleDeleteOnePost={this.handleDeleteOnePost}
                  addComment={this.props.addComment}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    profile: state.profile,
    comments: state.comments,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
