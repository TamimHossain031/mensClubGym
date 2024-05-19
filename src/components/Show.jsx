import { useEffect, useState } from "react";
import { getData ,upDateDue} from "./Utility/firebase";

import { useNavigate } from "react-router-dom";
import edit from '../assets/edit-6931553_1280-removebg-preview.png';
import Due from '../assets/hourglass-1425727_1280.png';
export default function ShowData() {
  const [data, setData] = useState([]);
  const [date,setDate]=useState(new Date().getMonth());
  const navigate = useNavigate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' })+now.getFullYear();
  
  
  
  let nextMonthName;
  if(date == 12){
    nextMonthName = monthNames[0]+now.getFullYear().toString();
  }else{
    nextMonthName = monthNames[date]+now.getFullYear().toString();
  }
  
  
  
  
   console.log(nextMonthName)

  window.addEventListener("online", () => {
   
    navigate('/');
}); 
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      if (!ignore) {
        const showData = getData()
          .then((result) => {
            let allData = [];
            result.forEach((single) => allData.push(single.data()));
            return allData;
          })
          .then((result) => setData([...result]));

        window.addEventListener("offline", () => {
            navigate('/error/disconnect');
        });
      }
        console.log(month,nextMonthName)
      if(month == nextMonthName){
        console.log(nextMonthName,month);
        
        let due=[];
        const allData = getData().then(res=> res.forEach(single=>{
          due = [...single.data().due]
           if(!single.data().payments.includes(month)){
            if(!due.includes(month)){
              due.push(month);
            }
          
          upDateDue(single.data().id.toString(),due);
        }
        due =[];
        setDate(date+1);
        
      }))
        
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
        <tbody className='text-xs'>
        {data.length == 0 ? <h1>No Data</h1> : data.map(el=>{
            return(
                <tr key={el.id}className ='border border-collapse'>
                    <td className='border'>{el.id}</td>
                    <td><img src={el.downloadURL} className='w-[50px] h-[50px] rounded-full'/> </td>
                    <td className='border'>{el.name}</td>
                    <td className='border'>{el.month}</td>
                    <td className='border'>{el.date}</td>
                    <td className='border py-1 text-center'><button className='bg-stone-500 w-[40px] h-[40px] flex justify-center items-center rounded-lg mb-1' onClick={()=> navigate(`month/${[el.id,el.name]}`)}><img src={Due} width={15}/></button><button className='bg-white w-[40px] h-[40px] flex justify-center items-center rounded-lg' onClick={()=> navigate(`month/${[el.id,el.name]}`)}><img src={edit} width={30}/></button> </td>
                </tr>
            )
        })}
        
            
        </tbody>
      </table>
    </div>
  );
}
