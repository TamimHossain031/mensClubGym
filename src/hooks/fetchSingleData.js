import { useEffect, useState } from "react";
import { getSingleData,getUpdateData } from "../components/Utility/firebase";

const FetchData = () => {
  const [singleData, setSingleData] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  const fetchData = async () => {
   const allData = getUpdateData();
    
      
    
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  return { singleData,isLoading };
};

export default FetchData;
