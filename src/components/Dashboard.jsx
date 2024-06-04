import {useState,useEffect} from  'react';
import AddEmploye from './AddEmploye';
import del from '../assets/material-icon-1307676_1280.png'
import { addEmploe , getData,deleteData} from "./Utility/firebase";
export default function Dashboard() {
const [show,setShow]=useState(false);
const [data,setData] = useState([])
const handleAdd=()=>{
 setShow(!show)
}


const getEmploye = async()=>{
  let allData=[];
    await getData('employe').then(res=> res.forEach(element => {
      allData.push(element.data())
      
    }))
    setData([...allData])
    
}

const deleteEm=(id)=>{
   deleteData(id,'employe').then((res) => getEmploye());
 
  
}

useEffect(()=>{

 getEmploye()
},[])




  return (
    <section className="w-full p-5 h-[100dvh] text-white relative">
      {show && <AddEmploye handleModal={()=>setShow(data=> !data)}  showData={getEmploye} />}
      <div>
        <button className='border px-1' onClick={handleAdd}>Add Employe</button>
        <table className='border border-collapse w-full mt-4 text-center'>
          <thead>
            <tr className='border'>
              <th className='border'>Name</th>
              <th className='border'>Role</th>
              <th className='border'>Username</th>
              <th className='border'>password</th>
              <th className='border'>action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map(single=>(
            <tr className='border' key={single}>
              <td className='border capitalize'>{single.name}</td>
              <td className='border capitalize'>{single.role}</td>
              <td className='border'>{single.name}</td>
              <td className='border'>{single.password}</td>
              <td className='border'><button onClick={()=>deleteEm(single.userId)}><img className='w-[40px] h-[40px]' src={del}/></button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
