import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import del from '../assets/material-icon-1307676_1280.png'
import { db, deleteData } from "../components/Utility/firebase";
export default function ShowDetails() {
  const { id } = useParams();
  let idRef = id.split(",");
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [show, setShow] = useState("");
  const deleteUser = () => {
    setShow("Loading.....");
    deleteData(data?.id.toString(),'client').then((res) => navigate("/show"));
  };
  const fetchData = () => {
    const docSnap = onSnapshot(doc(db, "client", idRef[0]), (doc) => {
      setData(doc.data());
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-[100dvw] p-3 border-l-fuchsia-500 h-[100dvh] text-white text-sm">
        {show && <p>{show}</p>}
      {!show && (
        <div>
          <h1>{idRef[1]}'s Details</h1>
          <img
            className="w-[150px] h-[150px] object-cover object-top rounded-full mx-auto"
            src={data?.downloadURL}
            alt=""
          />
          <table className='mt-3 border-collapse w-full'>
            <tr className='border'>
              <td className='border'>Id :</td>
              <td className='border'>{data?.id}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Name :</td>
              <td className='border'>{data?.name}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Father's Name :</td>
              <td className='border'>{data?.father}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Mother's Name :</td>
              <td className='border'>{data?.mother}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Date of Birth :</td>
              <td className='border'>{data?.birth}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Mobile :</td>
              <td className='border'>{data?.mobile}</td>
            </tr>
            
            <tr className='border'>
              <td className='border'>Permanent Add :</td>
              <td className='border'>{data?.permanent}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Course Duration :</td>
              <td className='border'>{data?.month} month</td>
            </tr>
            <tr className='border'>
              <td className='border'>Occupation :</td>
              <td className='border'>{data?.occupation}</td>
            </tr>
            <tr className='border'>
              <td className='border'>Payment :</td>
              <td className='border'>{data?.payments.length} month</td>
            </tr>
            <tr className='border'>
              <td className='border'>Due :</td>
              <td className='border'>{data?.due.length} month</td>
            </tr>
          </table>
         
          <div className="flex justify-between">
            <p>Admission Fee : {data?.Fee} Taka</p>
            <p>Admission Due : {data?.AdmissionDue} Taka</p>
          </div>

          <button
            className="mt-2 px-1 rounded-md float-right"
            onClick={deleteUser}
          >
            <img src={del} className='w-[40px] h-[40px]'/>
          </button>
        </div>
      )}
    </section>
  );
}
