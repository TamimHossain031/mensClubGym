import { RiMenuLine } from "react-icons/ri";
import {useState} from "react";
import{Link} from "react-router-dom";
export default function Nav(){
    const [show,setShow]=useState(false);
    
    
    return (
        <nav className="px-2 py-5 flex justify-between relative">        
        <div className="text-sky-500 text-xl"> Men<span className="text-white">'</span>s Club <span className="text-[30px] text-white">.</span></div>
       
        <button onClick={()=>setShow(!show)} className="text-white text-xl">
           <RiMenuLine/>
        </button>
    
        
       {show && <div className="absolute top-[100%] right-0 text-white bg-sky-500 py-4 px-2 text-xs">
            <ul className='space-y-3'>
            <li className='hover:bg-white hover:text-sky-500'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:bg-white hover:text-sky-500'>
                    <Link to='/add'>Add Member</Link>
                </li>
                <li className='hover:bg-white hover:text-sky-500'>
                    <Link to='/show'>Show Member</Link>
                </li>
            </ul>
        </div>}
    </nav>
    );
}