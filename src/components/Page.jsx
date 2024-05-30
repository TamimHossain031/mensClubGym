
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Add from "./Add";
import ShowData from "./Show";
import AddMonth from "./AddMonth";
import Error from "../components/Utility/Error";
import DueData from "./DueData";
import Update  from "./Update";


export default function Page() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="show" element={<ShowData />} />
          <Route path="show/month/:id" element={<AddMonth />} />
          <Route path="error/:error" element={<Error />} />
          <Route path="dueData" element={<DueData />} />
         <Route path='show/update/:el' element={<Update />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  
  </>;
}
