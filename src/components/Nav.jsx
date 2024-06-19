import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import cross from "../assets/icons8-cross-50.png";
import { adminSignOut } from "./Utility/firebase";
import {useContext} from 'react';
import { login } from "../Context";
export default function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("role");
  const {addV} = useContext(login);

 

  const signOut = async () => {
    await adminSignOut().then((res) => {
      localStorage.removeItem("role");
      addV('');
      setShow(false);
      navigate("/");
    });
  };

  return (
    <nav className="px-2 py-5 flex justify-between relative z-10 xl:px-[30px]">
      <button onClick={() => navigate("/")} className="text-sky-500 text-xl">
        {" "}
        Men<span className="text-white">'</span>s Club{" "}
        <span className="text-[30px] text-white">.</span>
      </button>

     {user ? <button
        onClick={() => setShow(!show)}
        className="text-white text-xl active:bg-inherit"
      >
        <RiMenuLine />
      </button> :  <button
            className=" border mt-4  px-2 py-1 rounded text-white"
            onClick={() => (user ? signOut() : navigate("login"))}
          >
            {user ? "logout" : "login"}
          </button>} 

      {show && (
        <div className="absolute top-[100%] right-0 w-[100%] text-white text-center bg-sky-500 py-4 pt-9 px-4 text-xs transition">
          <button
            onClick={() => setShow(false)}
            className="absolute top-0 right-0"
          >
            <img src={cross} alt="cross-icon" />
          </button>
          {user && (
            <ul className="space-y-3 text-center mt-3 w-[100%]">
              <li className="hover:bg-white hover:text-sky-500 py-1">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-white hover:text-sky-500 py-1">
                <Link to="/add">Add Member</Link>
              </li>
              <li className="hover:bg-white hover:text-sky-500 py-1">
                <Link to="/show">Show Member</Link>
              </li>
              <li className="hover:bg-white hover:text-sky-500 py-1">
                <Link to="/dueData">Due Data</Link>
              </li>
              {user == "admin" && (
                <li className="hover:bg-white hover:text-sky-500 py-1">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
            </ul>
          )}

          <button
            className=" border mt-4  px-2 py-1 rounded"
            onClick={() => (user ? signOut() : navigate("login"))}
          >
            {user ? "logout" : "login"}
          </button>
        </div>
      )}


    </nav>
  );
}
