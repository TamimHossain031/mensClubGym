import { useParams } from "react-router-dom";
import MonthInput from "./Utility/MonthInput";
import { updatePayment } from "./Utility/firebase";
export default function AddMonth() {
  const { id } = useParams();
  let month = [];
  const year = new Date().getFullYear();
  const handleData = (name, paid) => {
    if (!paid) {
      const filterd = month.filter((single) => single !== name);
      month = filterd;
      updateData(month);
    } else {
      month.push(name);
      updateData(month);
    }
  };

  const updateData = (month) => {
  

    updatePayment(id, month);
  };
  return (
    <div className="min-h-[100dvh]">
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
  );
}
