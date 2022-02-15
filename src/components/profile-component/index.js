import React from "react";
import "./index.css";
import profilepic from "../images/sam.jpeg";

const ProfileComponent = () => {
  return (
    <>
      <div className="parentView">
        <div className="imageParentView">
          <img className="pView" src={profilepic} />
          <p className="facilitatorText">Senior Developer</p>
        </div>

        <div className="profileTextParent">
          <p className="nameText">Mr SAMUEL KELECHI</p>
          <p className="designationText">Lecturer</p>
        </div>
      </div>
      <p className="beneficiariesText">BENEFICIARIES</p>
    </>
  );
};

export default ProfileComponent;
