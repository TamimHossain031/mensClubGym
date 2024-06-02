import {useState} from  'react';
import AddEmploye from './AddEmploye';
export default function Dashboard() {
const [show,setShow]=useState(false);
const handleAdd=()=>{
 setShow(!show)
}
  return (
    <section className="w-full p-5 h-[100dvh] text-white relative">
      {show && <AddEmploye/>}
      <div>
        <button className='border px-1' onClick={handleAdd}>Add Employe</button>
        <table className='border border-collapse w-full mt-4'>
          <thead>
            <tr className='border'>
              <th className='border'>Name</th>
              <th className='border'>Role</th>
              <th className='border'>userName</th>
              <th className='border'>password</th>
              <th className='border'>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
