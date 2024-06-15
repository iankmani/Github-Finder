import React from "react";
import "./Profile.css";
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import profile from "../assets/Primer.jpeg";
import { LiaStarSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";

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
    <div className="profile-container">
      <div className="left-profile-section">
        <div className="everything-left">
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
      <div className="right-profile-section">
        <div className="profile-right-content">
          <div className="respository-title">
            <h2>Repositories (30)</h2>
          </div>
          <div className="repository-list">
            <div className="repository-item">
              <div className="repository-name">
                <h3>.github</h3>
              </div>
              <div className="repository-description">
                <p>Community health files for the @Github organization</p>
              </div>
              <div className="repository-rating">
                <Info icon={<IoIosGitNetwork />} Name="Forks" />
                <Info icon={<LiaStarSolid />} Name="Stars" />
              </div>
            </div>
            <div className="repository-item">
              <div className="repository-name">
                <h3>.github</h3>
              </div>
              <div className="repository-description">
                <p>Community health files for the @Github organization</p>
              </div>
              <div className="repository-rating">
                <Info icon={<IoIosGitNetwork />} Name="Forks" />
                <Info icon={<LiaStarSolid />} Name="Stars" />
              </div>
            </div>
            <div className="repository-item">
              <div className="repository-name">
                <h3>.github</h3>
              </div>
              <div className="repository-description">
                <p>Community health files for the @Github organization</p>
              </div>
              <div className="repository-rating">
                <Info icon={<IoIosGitNetwork />} Name="Forks" />
                <Info icon={<LiaStarSolid />} Name="Stars" />
              </div>
            </div>
            <div className="repository-item">
              <div className="repository-name">
                <h3>.github</h3>
              </div>
              <div className="repository-description">
                <p>Community health files for the @Github organization</p>
              </div>
              <div className="repository-rating">
                <Info icon={<IoIosGitNetwork />} Name="Forks" />
                <Info icon={<LiaStarSolid />} Name="Stars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
