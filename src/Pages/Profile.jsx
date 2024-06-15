import React from "react";
import "./Profile.css";
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import profile from "../assets/Primer.jpeg";

const Info = ({ Name, icon }) => {
  return (
    <div className="info">
      <div className="profile-icon-wrapper">
        {icon}
        <p>{Name}</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="right-profile-section">
      <div className="everything-right">
        <div className="profile-pic">
          <img
            src={profile}
            alt="user Profile picture "
            className="profile-pic-img"
          />
        </div>
        <div className="user-name">
          <h2>Github</h2>
        </div>
        <div className="user-description">
          <p>github</p>
          <br />
          <p>How people build software</p>
        </div>
        <div className="user-external-link">
          <a href=""> {<FaExternalLinkAlt />} view on Github</a>
        </div>
        <div className="user-info">
          <Info icon={<CiLocationOn />} Name="Location" />
          <Info icon={<RiGitRepositoryFill />} Name="Repositories" />
          <Info icon={<MdGroups />} Name="Followers" />
          <Info icon={<MdGroups />} Name="Following" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
