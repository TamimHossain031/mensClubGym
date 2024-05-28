import { useState } from "react";
export default function MonthInput({ handleData, month }) {
  const [paid, setPaid] = useState(false);
  const handle = (e) => {
    const value = e.target.value + new Date().getFullYear();
    setPaid(!paid);

    handleData(value, !paid);
  };
  return (
    <div className="text-white">
      <input
        className="m-2"
        type="checkbox"
        checked={paid}
        value={month}
        id={month}
        onChange={(e) => handle(e)}
      />
      <label className="capitalize" htmlFor={month}>
        {month}
      </label>
    </div>
  );
}
