import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../components/Utility/Error";
import Add from "./Add";
import AddMonth from "./AddMonth";
import DueData from "./DueData";
import Home from "./Home";
import Layout from "./Layout";
import ShowData from "./Show";
import Protected from "./Utility/Protected";

import Dashboard from "./Dashboard";
import Login from "./Login";
import ShowDetails from "./ShowDetails";

export default function Page() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="add"
              element={
                <Protected>
                  {" "}
                  <Add />
                </Protected>
              }
            />
            <Route
              path="show"
              element={
                <Protected>
                  {" "}
                  <ShowData />
                </Protected>
              }
            />
            <Route
              path="show/month/:id"
              element={
                <Protected>
                  {" "}
                  <AddMonth />
                </Protected>
              }
            />
            <Route path="error/:error" element={<Error />} />
            <Route
              path="dueData"
              element={
                <Protected>
                  {" "}
                  <DueData />
                </Protected>
              }
            />
           
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <Protected>
                  {" "}
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="details/:id"
              element={
                <Protected>
                  {" "}
                  <ShowDetails />
                </Protected>
              }
            />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
