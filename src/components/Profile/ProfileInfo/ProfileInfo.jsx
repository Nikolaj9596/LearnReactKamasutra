import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.image}>
        <img
          src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
          alt=""
        />
      </div>
      <div className={style.description}>avatar + discript</div>
    </div>
  );
};

export default ProfileInfo;
