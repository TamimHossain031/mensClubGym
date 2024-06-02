import { useState } from "react";
import { signIn } from "./Utility/firebase";
import UpdatePass from "./Utility/UpdatePass";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import { login } from "../Context";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow] = useState(false);
  const [error,setError]=useState('');
  const {setIsLogin} = useContext(login);
 const navigate = useNavigate();
 

  const handleModal=()=>{
    setShow(!show)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = await signIn(email, password)
      .then((result) => {
        setIsLogin(data=> !data)
        localStorage.setItem('role','admin');
        
       navigate('/dashboard')
      })
      .catch((err) => setError(err.code));
  };
  return (
    <section className="h-[100dvh] text-center text-white flex flex-col relative">

    {show && <UpdatePass handleModal={handleModal} email={email} />}
      <h1>Login To Dashboard</h1>
      <form
        className="flex flex-col w-[300px] text-left m-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email : </label>
        <input
          className="bg-transparent border"
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password : </label>
        <input
          className="bg-transparent border"
          value={password}
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

       {error && <p className='text-xs text-red-400 py-1'>Your admin password is Wrong <button className='text-white underline' onClick={handleModal}>Update PassWord</button></p>} 

        <button className="border p-1 mt-5 hover:bg-sky-600 hover:border-sky-600 transition-all">
          Login
        </button>
      </form>
    </section>
  );
}
