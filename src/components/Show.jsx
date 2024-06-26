import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import edit from "../assets/edit-6931553_1280-removebg-preview.png";
import Due from "../assets/hourglass-1425727_1280.png";
import { getData, upDateDue } from "./Utility/firebase";
export default function ShowData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  console.log(category);

  const nextMonth = new Date().getMonth();

  const navigate = useNavigate();
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" }).toLowerCase();

  let nextM = new Date().getMonth() + 1;
  let prevM = new Date().getMonth() - 1;
  let setMonth = localStorage.getItem("nextMonth");
  if (!setMonth) {
    localStorage.setItem("nextMonth", monthNames[nextM]);
  }

  window.addEventListener("online", () => {
    navigate("/");
  });

  let nMonth = localStorage.getItem("nextMonth");

  if (month == nMonth) {
    let nextMonthName;
    if (nextM >= 12) {
      nextMonthName = monthNames[0];
    } else {
      nextMonthName = monthNames[nextM];
    }
    localStorage.setItem("nextMonth", nextMonthName);
    let prevMonthName;
    if (prevM < 0) {
      prevMonthName = monthNames[11] + (now.getFullYear() - 1).toString();
    } else {
      prevMonthName = monthNames[prevM] + now.getFullYear();
    }

    let due = [];
    const allData = getData().then((res) =>
      res.forEach((single) => {
        due = [...single.data().due];
        if (
          !single.data().payments.includes(prevMonthName) &&
          !due.includes(prevMonthName)
        ) {
          due.push(prevMonthName);

          upDateDue(single.data().id.toString(), due);
        }
        due = [];
      })
    );
  }

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      if (!ignore) {
        const showData = getData()
          .then((result) => {
            let allData = [];
            result.forEach((single) => allData.push(single.data()));
            return allData;
          })
          .then((result) => setData([...result]));

        window.addEventListener("offline", () => {
          navigate("/error/disconnect");
        });
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="h-[100dvh] overflow-y-auto text-white p-3 relative">
      <div className="flex justify-between my-3">
        <h2>Member's Details</h2>
        <div className="grid">
          <input
            className="bg-transparent border rounded-md p-1"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="bg-transparent "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option className="text-black" value="name">
              Name
            </option>
            <option className="text-black" value="id">
              Id
            </option>
            <option className="text-black" value="mobile">
              Phone
            </option>
          </select>
        </div>
      </div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <table className="border-collapse border border-slate-500 table-auto w-full text-center">
          <thead>
            <tr className="border">
              <th>Id</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Course</th>
              <th>Join Date</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {data.length !== 0 &&
              data
                .filter((item) => {
                  switch (category) {
                    case "name":
                      return search.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(search.toLowerCase());
                      break;
                    case "id":
                      return search === ""
                        ? item
                        : item.id.toString().includes(search.toString());
                      break;
                    case "mobile":
                      return search === ""
                        ? item
                        : item.mobile.toString().includes(search.toString());
                      break;
                  }
                  return item;
                })
                .map((el) => {
                  return (
                    <tr key={el.id} className="border border-collapse">
                      <td className="border">{el.id}</td>
                      <td>
                        <img
                          loading='lazy'
                          src={el.downloadURL}
                          className="w-[50px] h-[50px] rounded-full object-cover"
                        />{" "}
                      </td>
                      <td className="border">{el.name}</td>
                      <td className="border">{el.month}</td>
                      <td className="border">{el.date}</td>
                      <td className="border py-1 text-center">
                        <button
                          className="bg-stone-500 w-[40px] h-[40px] flex justify-center items-center rounded-lg mb-1 relative"
                          onClick={() => navigate(`month/${[el.id, el.name]}`)}
                        >
                          <img src={Due} width={15} />
                          <span className="text-[10px] absolute top-[-2px] right-[-3px] w-3 h-3 bg-red-400 rounded-full flex justify-center items-center">
                            {el.due.length}
                          </span>
                        </button>
                        <button
                          className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-lg"
                          onClick={() => {
                            navigate(`/details/${[el.id, el.name]}`);
                          }}
                        >
                          <img src={edit} width={30} />
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      )}
    </div>
  );
}
