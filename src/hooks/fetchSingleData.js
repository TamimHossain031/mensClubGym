import { useEffect, useState } from "react";
import { getSingleData } from "../components/Utility/firebase";

const FetchSingleData = (id) => {
  const [singleData, setSingleData] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  const fetchData = async () => {
    const result = await getSingleData(id).then((res) => {
      setSingleData(res.data()) ;
      setIsLoading(false)
    });
  };

  useEffect(() => {
    fetchData();
    
  }, [id]);

  return { singleData,isLoading };
};

export default FetchSingleData;
