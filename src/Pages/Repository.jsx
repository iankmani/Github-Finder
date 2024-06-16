import React, {useState} from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";
import useusernameStore from '../Store/UsernameStore';
import "./Repositories.css";


const Repository = () => {
    const [repositories, setRepositories] = useState([])
    
    const username = useusernameStore(state => { state.username})
    console.log(`this is the repository for ${username}`)

    if(username != null){
        (async () => {
            try{
                const api_call = `https://api.github.com/users/${username}/repos`
                const response = await fetch(api_call)
                const data = await response.json();
                setRepositories(data)
            }
            catch(error){
                console.log(error)
            }
        })();
    }
    else{
        console.log("username is empty...")
    }
  return (
    <div className="right-profile-section">
        <h2 className="respository-title">Repositories (30)</h2>
        <section className="repositories">
            {repositories.map(repo => (
                <div key={repo.id} className="repository">
                    <div className="repository-name">
                    <h3 >{repo.name}</h3>
                    </div>
                    <div className="repository-description">
                    <p >{repo.description}</p>
                    </div>
                    
                 <div className='repos-ratings'>
                   <p className="repository-forks"> <IoIosGitNetwork/> {repo.forks_count} forks</p>
                   <p className="repository-stars"> <LiaStarSolid/> {repo.stargazers_count} Stars </p>

                 </div>
                       
                </div>

                
            ))}
        </section>

    </div>
  )
}

export default Repository