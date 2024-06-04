import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
          <p>Id : {data?.id}</p>
          <p>Name : {data?.name}</p>
          <p>Father's Name : {data?.father}</p>
          <p>Mother's Name : {data?.mother}</p>
          <p>Date of Birth : {data?.birth}</p>
          <p>Mobile No : {data?.mobile}</p>
          <p>Permanent Address : {data?.permanent}</p>
          <div className="flex justify-between">
            <p>Admission Fee : {data?.Fee} Taka</p>
            <p>Admission Due : {data?.AdmissionDue} Taka</p>
          </div>

          <p>Course Duration : {data?.month} Month</p>
          <p>Occupation : {data?.occupation}</p>
          <p>Payments : {data?.payments.length} Months</p>
          <p>Due : {data?.due.length} Months</p>
          <button
            className="border px-1 rounded-md float-right"
            onClick={deleteUser}
          >
            Delete
          </button>
        </div>
      )}
    </section>
  );
}
