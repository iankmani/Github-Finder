import {create} from 'zustand'

const usernameStore =(set) =>(
    {
        username:"iankmani",
    
        setnewusername: (newusername) =>{
            set(()=>{
                return{
                    username:newusername
                }
            });
        }
    
    }
);


const useusernameStore = create(usernameStore)

export default useusernameStore;

