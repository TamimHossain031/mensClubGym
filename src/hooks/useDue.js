import { useEffect, useState } from "react";

function getDueData(getData) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const showData = getData()
      .then((result) => {
        let allData = [];
        result.forEach((single) => allData.push(single.data()));
        return allData;
      })
      .then((result) => {
        let dueMember = result.filter((res) => res.due.length == 0); // to be length < 0

        setData([...dueMember]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
}

export default getDueData;
