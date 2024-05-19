import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, updatePayment } from "../components/Utility/firebase";
import MonthInput from "./Utility/MonthInput";
export default function AddMonth() {
  const { id } = useParams();
  const [data, setData] = useState();
  let idRef = id.split(",");
  let month = [];
  let paymentData = "";
  const year = new Date().getFullYear();
  const handleData = (name, paid) => {
    month = data;
    console.log();

    if (!paid) {
      const filterd = month.filter((single) => single !== name);
      month = filterd;
      updateData(month);
    } else if (data.includes(name) == false) {
      month.push(name);
      updateData(month);
    }
  };

  const fetchData = async () => {
    const docSnap = await getDoc(doc(db, "client", idRef[0])).then((res) => {
      setData(res.data().payments);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (month) => {
    updatePayment(idRef[0], month).then((res) => fetchData());
  };

  return (
    <div className="text-white min-h-[100dvh]">
      <h1 className="text-xl mb-4">Add {idRef[1]}'s Paymetns </h1>
      <div className="flex">
        <div className="text-white w-1/2">
          <MonthInput handleData={handleData} month="january" />
          <MonthInput handleData={handleData} month="february" />
          <MonthInput handleData={handleData} month="march" />
          <MonthInput handleData={handleData} month="april" />
          <MonthInput handleData={handleData} month="may" />
          <MonthInput handleData={handleData} month="june" />
          <MonthInput handleData={handleData} month="july" />
          <MonthInput handleData={handleData} month="august" />
          <MonthInput handleData={handleData} month="september" />
          <MonthInput handleData={handleData} month="october" />
          <MonthInput handleData={handleData} month="november" />
          <MonthInput handleData={handleData} month="december" />
        </div>
        <div className="w-1/2">
          <h1 className="underline pb-1">Paid Months</h1>
          <ol className="list-decimal">
            {data &&
              data.map((single) => <li className="capitalize">{single}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}
