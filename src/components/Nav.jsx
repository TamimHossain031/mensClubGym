import { RiMenuLine } from "react-icons/ri";
import {useState} from "react";
import{Link} from "react-router-dom";
import cross from '../assets/icons8-cross-50.png';
export default function Nav(){
    const [show,setShow]=useState(false);
    
    
    return (
        <nav className="px-2 py-5 flex justify-between relative">        
        <div className="text-sky-500 text-xl"> Men<span className="text-white">'</span>s Club <span className="text-[30px] text-white">.</span></div>
       
        <button onClick={()=>setShow(!show)} className="text-white text-xl active:bg-inherit">
           <RiMenuLine/>
        </button>
    
        
       {show && <div className="absolute top-[100%] right-0 w-[100%] text-white bg-sky-500 py-4 pt-9 px-4 text-xs transition">
            <button onClick={()=>setShow(false)} className='absolute top-0 right-0'><img src={cross} alt="cross-icon" /></button>
            <ul className='space-y-3 text-center mt-3 w-[100%]'>
            <li className='hover:bg-white hover:text-sky-500 py-1'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:bg-white hover:text-sky-500 py-1'>
                    <Link to='/add'>Add Member</Link>
                </li>
                <li className='hover:bg-white hover:text-sky-500 py-1'>
                    <Link to='/show'>Show Member</Link>
                </li>
                
                
            </ul>
        </div>}
    </nav>
    );
}