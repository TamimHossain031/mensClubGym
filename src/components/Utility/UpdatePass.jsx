import { useState } from "react";
import { updateAdminPass } from "./firebase";
export default function UpdatePass({ email, handleModal }) {
  const [password, setPassword] = useState("");
 

  const userEmail = "tamimhossain031@gmail.com";

  const updateAdmin = () => {
    updateAdminPass(password,userEmail)
     
  };

  let checkAdmin;
  if (userEmail !== email) {
    checkAdmin = false;
  } else {
    checkAdmin = true;
  }
  return (
    <div className="absolute top-0 left-1/2 translate-x-[-50%] py-10 px-5 bg-sky-400 w-[300px] h-[400px] flex flex-col">
      <div className="flex justify-between">
        <h1>Update Password</h1>
        <button className="float-right px-1 border" onClick={handleModal}>
          X
        </button>
      </div>

      {checkAdmin ? (
        <>
          <p className="mt-5 text-white">Please Enter Update button : </p>
         
        </>
      ) : (
        <p className="mt-5 text-red-500">You are not Admin.</p>
      )}

      <button className="border mt-[100px] mb-[50px]" onClick={updateAdmin}>
        Update
      </button>
    
    </div>
  );
}
