import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
