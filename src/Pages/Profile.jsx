import React from "react";
import "./Profile.css";
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
// import profile from "../assets/Primer.jpeg";
import useusernameStore from "../Store/UsernameStore";
import {useState} from 'react'

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

function Profile(){

    const [img, setimg] = useState(null)
    const [login, setLogin] = useState(null)
    const [bio, setBio] = useState(null)
    const [url, setUrl] = useState(null)
    const [location, setLocation] = useState(null)
    const [public_repos, setRepos] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [following, setFollowing] = useState(null)
    const [name, setName] = useState(null)
    
    


    const username = useusernameStore(state => state.username);
    console.log(`the username from the profile is ${username}`)
           if (username != null){

        (async () => {
            try{
            const api_call = `https://api.github.com/users/${username}`;
            const response = await fetch(api_call);
            const data = await response.json();
            // console.log(data);
            setimg(data.avatar_url)
            setLogin(data.login)
            setBio(data.bio)
            setUrl(data.html_url)
            setLocation(data.location)
            setRepos(data.public_repos)
            setFollowers(data.followers)
            setFollowing(data.following)
            setName(data.name)
        
        }
        catch (error){
            console.log("there was an error somewhere")
        }
        })();
    }
    else{
        alert("username is empty. Please input username.")
        }
        // console.log(username)


  return (
    <div className="profile-container">
      <div className="left-profile-section">
        <div className="everything-left">
          <div className="profile-pic">
            <img
              src={img}
              alt="user Profile picture "
              className="profile-pic-img"
            />
          </div>
          <div className="user-name">
            <h2>{login}</h2>
          </div>
          <div className="user-description">
            <p>{name}</p>
            <br />
            <p>{bio}</p>
          </div>
          <div className="user-external-link">
            <a href={url}> {<FaExternalLinkAlt />} view on Github</a>
          </div>
          <div className="user-info">
            <h4><CiLocationOn />{location}  </h4>
            <h4><RiGitRepositoryFill />{public_repos} Repositories </h4>
            <h4><MdGroups />{followers} Followers </h4>
            <h4><MdGroups />{following} Following </h4>
          </div>
        </div>
      </div>
              </div>
              );
            
            
            
    
};

export default Profile;
