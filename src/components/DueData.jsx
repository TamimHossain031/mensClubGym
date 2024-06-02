import useDue from "../hooks/useDue";
import { getData } from "./Utility/firebase";

import jsPDF from "jspdf";
import "jspdf-autotable";
export default function DueData() {
  const { data, isPending, error } = useDue(getData);

 
  const filterd = data.filter(single => single?.due.length > 0);
  

  

  const generatePDF = () => {
    const doc = new jsPDF();

    const columns = ["Id", "Name", "Join Date", "Due Months"];
    const rows = filterd.map((single) => [
      single.id,
      single.name,
      single.date,
      single.due.length,
    ]);

    doc.text("Members Due Amount", 14, 16);

    doc.setFontSize(12);
    // Build table using autoTable
   doc.autoTable({
      startY: 20, // Add space after image
      margin: { top: 20, left: 14, right: 14 },
      head: [columns],
      body: rows,
    });

    doc.save("my_table_report.pdf");
  };

  return (
    <section className="max-h-screen overflow-y-auto bg-white text-center p-5 text-xs">
      {isPending && <p>loading.....</p>}
      {error && <p>{error}</p>}
      <div>
        <article>
          <p>বকেয়া বেতনের তালিকা</p>
          <p>
            এত দ্বারা মেন'স ক্লাব জিম এর উক্ত সদস্যদের অবগতির জন্য জানানো যাচ্ছে
            যে উক্ত জিমের চলতি মাসের বকেয়া বেতন পরিশোধনের জন্য বিশেষভাবে বলা
            হলো।
          </p>
        </article>

        { !filterd.length > 0 ? <p className='py-3'>All Member Paid. Stay Happy .</p> : 
        
        <table className="border border-collapse w-full text-center mx-auto my-4 table-fixed">
        <thead>
          <tr>
            <th className="border border-collapse  pb-3">Id</th>
            <th className="border border-collapse  pb-3">Name</th>
            <th className="border border-collapse  pb-3">Join Date</th>
            <th className="border border-collapse  pb-3">Due</th>
          </tr>
        </thead>
        <tbody>
          {filterd.map((single) => (
              <tr key={single.id}>
                <td className="border border-collapse pb-3">{single.id}</td>
                <td className="border border-collapse pb-3">{single.name}</td>
                <td className="border border-collapse pb-3">{single.date}</td>
                <td className="border border-collapse pb-3">
                  {single.due.length} month
                </td>
              </tr>
            ))}
        </tbody>
      </table>
        
        
        
        }

       
      </div>

     { filterd.length > 0 && <button
        className="border py-1 px-4 border-lime-500 bg-lime-400 hover:bg-lime-600 rounded-full transition"
        onClick={generatePDF}
      >
        Download PDF
      </button>}

    
    </section>
  );
}
