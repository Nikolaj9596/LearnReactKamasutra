import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={props.state.newPostText}
        postData={props.state.postData}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
      />
    </div>
  );
};

export default Profile;
