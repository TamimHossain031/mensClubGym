import { useEffect, useState } from "react";
import { getData } from "./Utility/firebase";
import { useNavigate } from "react-router-dom";
export default function ShowData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
        {data && data.map(el=>{
            return(
                <tr key={el.id}className ='border border-collapse'>
                    <td className='border'>{el.id}</td>
                    <td><img src={el.downloadURL} className='w-[50px] h-[50px] rounded-full'/> </td>
                    <td className='border'>{el.name}</td>
                    <td className='border'>{el.month}</td>
                    <td className='border'>{el.date}</td>
                    <td className='border'><button onClick={()=> navigate(`month/${el.id}`)}>Due</button></td>
                </tr>
            )
        })}
        
            
        </tbody>
      </table>
    </div>
  );
}
