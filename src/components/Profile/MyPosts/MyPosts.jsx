import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postItem = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    props.addPost();
  };

  let removePost = () => {
    alert("Hello");
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text) 
  };

  let newPostElement = React.createRef();

  return (
    <div>
      My Post
      <div className="newPost">
        <textarea
          onChange={onChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <br />
        <button onClick={addPost}>Add Post</button>
        <button onClick={removePost}>Remove Post</button>
      </div>
      <div className={style.posts}>{postItem}</div>
    </div>
  );
};

export default MyPosts;
