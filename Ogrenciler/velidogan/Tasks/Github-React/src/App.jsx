import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Request from "./request/request"
import UserCard from './components/UserCard';

function App() {

  const [user,setUser] = useState("");
  const [errMsg,setErrMsg] = useState("");
  const [userData,setUserData] = useState({});
  const [userRepo,setUserRepo] = useState([]);

  const fetchUser = async() => {
    const response = await Request.get(`https://api.github.com/users/${user}`);
    if(response.name == "Error") {
      setErrMsg(response.message);
      return;
    }
    await fetchRepo(response.repos_url);
    setUserData(response);    
    setErrMsg("");
  }
  const fetchRepo = async(url) => {
    const response = await Request.get(url);  
    setUserRepo(response);
  }
  const handleUser = () => {
    fetchUser();
  }
  return (
    <>
      <div className='bg'>
        <div className="container py-5">
          <Input user={user} setUser={setUser} handleUser={handleUser}></Input>
          {
            errMsg ? <div className='text-light p-3 mt-3 border border-light rounded-2 error'>{errMsg}</div> : <UserCard userData={userData} userRepo={userRepo}/>
          }          
        </div>   
      </div>   
    </>
  )
}

export default App
