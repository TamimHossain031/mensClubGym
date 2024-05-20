import {useState,useEffect}from 'react';
import { getData } from "./Utility/firebase";
export default function DueData(){
    const[data,setData]=useState([]);
      
    useEffect(()=>{
        const showData = getData()
        .then((result) => {
          let allData = [];
          result.forEach((single) => allData.push(single.data()));
          return allData;
        })
        .then((result) => setData([...result]));
        console.log(data);

    },[])
   
    
    return (
            <div className='min-h-screen'>	
                <h1>বকেয়া বেতনের তালিকা</h1>

            </div>
    );
}