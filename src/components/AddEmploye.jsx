import { useRef, useState } from "react";
import { addEmploe } from "./Utility/firebase";

export default function AddEmploye({ handleModal,showData }) {
  const [user, setUser] = useState({});
  const updateData = useRef("");
  const handleData = (e) => {

    
    const key = e.target.name;
    const value = e.target.value;

    if (value !== null) {
      setUser({
        ...user,
        userId:crypto.randomUUID(),
        [key]: value,
      });
    }
  };


  
  const add = async () => {
    await addEmploe(user).then((res) => {
        showData();
      handleModal();
    });
  };
  return (
    <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[300px] grid text-center p-4 bg-sky-500">
      <h1>Add Employe</h1>
      <p ref={updateData}></p>
      <p className="text-left">Name :</p>
      <input
        type="text"
        className="bg-transparent border rounded p-1"
        name="name"
        onChange={handleData}
      />
      <p className="text-left">Password :</p>
      <input
        type="text"
        className="bg-transparent border rounded p-1"
        name="password"
        onChange={handleData}
      />
      <select className="bg-transparent" name="role" onChange={handleData}>
        <option className="text-black" value="user">
          Select role
        </option>
       
        <option className="text-black" value="manager">
          Manager
        </option>
        <option className="text-black" value="user">
          User
        </option>
      </select>
      <div className="flex justify-end">
        <button className="border m-2 px-1" onClick={add}>
          Add
        </button>
        <button className="border m-2 px-1" onClick={() => handleModal()}>
          Close
        </button>
      </div>
    </div>
  );
}
