import { useEffect, useState } from "react";
import { getData } from "./Utility/firebase";
export default function ShowData() {
  const[data,setData]=useState([]);
 

  useEffect(() => {
    
    let ignore = false;

    async function startFetching() {
      
      if (!ignore) {
       
            const showData = getData().then((result) => {
                let allData =[];
                result.forEach(single => allData.push(single.data()))
                return allData;
            } ).then(result => setData([...result]))
        

        window.addEventListener('offline',()=>{
            console.log('you are offline');
            
        })


       
      }
    }
  
    startFetching();
  
    return () => {
      ignore = true;
    };
    
  }, []);


  
  
  

  return (
    <div className="h-screen text-white p-3">
      <h2>Member's Details</h2>
      <table className="border-collapse border border-slate-500 table-auto w-full text-center">
        <thead>
          <tr className="border">
            <th>Id</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Course</th>
            <th>Join Date</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((element) => {
              return (
                <tr key={element.id} className='border border-collapse py-1'>
                  <td className='border border-collase'>{element.id}</td>
                  <td > <img src={element.downloadURL} width={50} height={50} className='w-[50px] h-[50px] rounded-full '/></td>
                  <td > {element.name}</td>
                  <td > {element.month}</td>
                  <td > {element.date}</td>
                  <td > {element.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
