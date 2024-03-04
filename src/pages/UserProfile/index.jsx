import React, { useContext } from "react";
import "./index.scss";
import UserContext from "../../store/userContext";
import { Link } from "react-router-dom";
import { TextConstant } from "../../utils/textConstant";

const UserProfile = () => {
  const { name, email, profile_pic, linkedin } = useContext(UserContext);

  return (
    <div className="profile_wrapper">
      <h6 className="profile_header">{TextConstant.userProfile}</h6>
      <div className="profile_card">
        <div className="profileDetails">
          <div className="leftProfile">
            <h1 className="profile-data">
              <span className="profilespan">{TextConstant.name} </span> {name}
            </h1>
            <h1 className="profile-data">
              <span className="profilespan">{TextConstant.email} </span> {email}
            </h1>
            <h1 className="profile-data">
              <span className="profilespan">{TextConstant.linkedin} </span>
              <Link to={linkedin} target="_blank" rel="noopener noreferrer">
                {linkedin}
              </Link>
            </h1>
          </div>
          <img src={profile_pic} className="profile-pic" alt="user-pic" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
