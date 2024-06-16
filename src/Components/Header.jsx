import React from "react";
import "./Header.css";
import { useState } from "react"; 'react'
import useusernameStore from "../Store/UsernameStore";

const Header = () => {


const setnewusername = useusernameStore((state) => state.setnewusername)
const username = useusernameStore((state ) => state.username)

  const [ name, setname] = useState(null)

  const handleInputquery = e => {
    setname(e.target.value)
  }

const handleSearchquery = e => {
  e.preventDefault()
  console.log(name)
  console.log(`from the header usename is ${name} `)
  setnewusername(name)

}


  return (
    <header className="header-section">
      <h1>GITHUB FINDER</h1>
      <p>
        By <a href="https://github.com/iankmani">Ian Kimani</a>
      </p>
      <div className="inputandbutton">
        <input type="text" placeholder="enter a username" onChange={handleInputquery} />
        <button onClick={handleSearchquery}>Search</button>
      </div>
    </header>
  );
};

export default Header;
