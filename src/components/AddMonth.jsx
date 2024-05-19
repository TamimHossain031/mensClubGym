import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, updatePayment } from "../components/Utility/firebase";
import MonthInput from "./Utility/MonthInput";
export default function AddMonth() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [feeUpdate, setFeeUpdate] = useState("");
  let idRef = id.split(",");
  let month = [];
  let paymentData = "";
  const year = new Date().getFullYear();
  const handleData = (name, paid) => {
    month = data?.payments;

    if (!paid) {
      const filterd = month.filter((single) => single !== name);
      month = filterd;
      updateData(month);
    } else if (data?.payments.includes(name) == false) {
      month.push(name);
      updateData(month);
    }
  };

  const fetchData = () => {
    const docSnap = onSnapshot(doc(db, "client", idRef[0]), (doc) => {
      setData(doc.data());
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (month) => {
    updatePayment(idRef[0], month).then((res) => fetchData());
  };

  const addFee = async (e) => {
    let updateFee = Number(data.Fee) + Number(feeUpdate);

    const washingtonRef = doc(db, "client", data?.id.toString());
    await updateDoc(washingtonRef, {
      Fee: updateFee.toString(),
    }).then((res) => setFeeUpdate(""));
  };

  return (
    <div className="text-white min-h-[100dvh] px-2">
      <h1 className="text-xl mb-4">
        Add <span className="text text-sky-500">{idRef[1]}</span>'s Paymetns{" "}
      </h1>
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
              data?.payments.map((single) => (
                <li key={single} className="capitalize">
                  {single}
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div className="border p-2 flex justify-between gap-2 text-sm">
        <h1>Addmission Fee: {data?.Fee}</h1>
        <input
          type="number"
          name="fee"
          value={feeUpdate}
          className="bg-transparent border rounded w-[100px]"
          onChange={(e) => setFeeUpdate(e.target.value)}
        />
        <button className="border p-1 rounded-lg" onClick={addFee}>
          Add Fee
        </button>
      </div>
    </div>
  );
}
