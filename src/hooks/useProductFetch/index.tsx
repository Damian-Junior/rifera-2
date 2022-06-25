import { useEffect, useState } from "react";
import axios from "axios";

import { StoreType } from "../../component/_shared/types";
const useProductFetch = (product: string) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(" http://localhost:5000/store")
      .then((response) => {
        const productType: Array<Record<string, any>> = response.data;
        setData(productType);
          console.log(productType);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { data };
};
export default useProductFetch;
