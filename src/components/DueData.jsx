import { useEffect, useState,useRef } from "react";
import { getData } from "./Utility/firebase";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default function DueData() {
  const [data, setData] = useState([]);
 const pdfRef = useRef();
  useEffect(() => {
    const showData = getData()
      .then((result) => {
        let allData = [];
        result.forEach((single) => allData.push(single.data()));
        return allData;
      })
      .then((result) => {
        let dueMember = result.filter((res) => res.due.length == 0);
        setData([...dueMember]);
      });
  }, []);

  const downloadPDF=()=>{
    const input = pdfRef.current;
    html2canvas(input).then(canvas=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4',true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth * ratio, imgHeight * ratio);
        pdf.save('dueData.pdf');
    })
  }

  return (
    <section className="min-h-screen bg-white text-center p-10 text-xl" >
      <div ref={pdfRef} className='px-[50px]'>
        <h1>বকেয়া বেতনের তালিকা</h1>
        <p>
          এত দ্বারা মেন'স ক্লাব জিম এর উক্ত সদস্যদের অবগতির জন্য জানানো যাচ্ছে
          যে উক্ত জিমের চলতি মাসের বকেয়া বেতন পরিশোধনের জন্য বিশেষভাবে বলা হলো।
        </p>
        <table className="border border-collapse w-full text-center mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-collapse  pb-3">Id</th>
              <th className="border border-collapse  pb-3">Name</th>
              <th className="border border-collapse  pb-3">Join Date</th>
              <th className="border border-collapse  pb-3">Due</th>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <h1>okkk</h1>
            ) : (
              data.map((single) => (<>
                <tr>
                  <td className="border border-collapse pb-3">{single.id}</td>
                  <td className="border border-collapse pb-3">{single.name}</td>
                  <td className="border border-collapse pb-3">{single.date}</td>
                  <td className="border border-collapse pb-3">
                    {single.payments.length} month
                  </td>
                </tr>
                 <tr>
                 <td className="border border-collapse pb-3">{single.id}</td>
                 <td className="border border-collapse pb-3">{single.name}</td>
                 <td className="border border-collapse pb-3">{single.date}</td>
                 <td className="border border-collapse pb-3">
                   {single.payments.length} month
                 </td>
               </tr>
                <tr>
                <td className="border border-collapse pb-3">{single.id}</td>
                <td className="border border-collapse pb-3">{single.name}</td>
                <td className="border border-collapse pb-3">{single.date}</td>
                <td className="border border-collapse pb-3">
                  {single.payments.length} month
                </td>
              </tr>
               <tr>
               <td className="border border-collapse pb-3">{single.id}</td>
               <td className="border border-collapse pb-3">{single.name}</td>
               <td className="border border-collapse pb-3">{single.date}</td>
               <td className="border border-collapse pb-3">
                 {single.payments.length} month
               </td>
             </tr>
              <tr>
              <td className="border border-collapse pb-3">{single.id}</td>
              <td className="border border-collapse pb-3">{single.name}</td>
              <td className="border border-collapse pb-3">{single.date}</td>
              <td className="border border-collapse pb-3">
                {single.payments.length} month
              </td>
            </tr>
            <tr>
                  <td className="border border-collapse pb-3">{single.id}</td>
                  <td className="border border-collapse pb-3">{single.name}</td>
                  <td className="border border-collapse pb-3">{single.date}</td>
                  <td className="border border-collapse pb-3">
                    {single.payments.length} month
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse pb-3">{single.id}</td>
                  <td className="border border-collapse pb-3">{single.name}</td>
                  <td className="border border-collapse pb-3">{single.date}</td>
                  <td className="border border-collapse pb-3">
                    {single.payments.length} month
                  </td>
                </tr>
              </>))
            )}
          </tbody>
        </table>
      </div>
      <button className='border py-1 px-4 border-lime-500 bg-lime-400 hover:bg-lime-600 rounded-full transition' onClick={downloadPDF}>Download PDF</button>
    </section>
  );
}
