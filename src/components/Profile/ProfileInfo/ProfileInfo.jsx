import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.image}>
        <img
          src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
          alt=""
        />
      </div>
      <div className={style.description}>
        <img src={props.profile.photos.large} alt="Profile Photo" />
      </div>
    </div>
  );
};

export default ProfileInfo;
