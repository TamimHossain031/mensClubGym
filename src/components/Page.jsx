
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Utility/Protected";
import Layout from "./Layout";
import Home from "./Home";
import Add from "./Add";
import ShowData from "./Show";
import AddMonth from "./AddMonth";
import Error from "../components/Utility/Error";
import DueData from "./DueData";
import Update  from "./Update";
import Login from "./Login";
import Dashboard from "./Dashboard";







export default function Page() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Protected> <Add /></Protected>} />
          <Route path="show" element={<Protected> <ShowData /></Protected>} />
          <Route path="show/month/:id" element={<Protected> <AddMonth /></Protected>} />
          <Route path="error/:error" element={<Error />} />
          <Route path="dueData" element={<Protected> <DueData /></Protected>} />
         <Route path='show/update/:el' element={<Protected> <Update /></Protected>} />
         <Route path='login' element={<Login />} />
         <Route path='dashboard' element={<Protected> <Dashboard /></Protected>} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  
  </>;
}
