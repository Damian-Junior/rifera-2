import { useEffect, useState } from "react";
import axios from "axios";

import { StoreType } from "../../component/_shared/types";
const useProductFetch = (product: string) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(" http://localhost:5000/store")
      .then((response) => {
        const productType: Array<Record<string, any>> = response.data.filter(
          (store: StoreType) => store.Category === product
        );
        setData(productType);

      })
      .catch((err) => console.log(err.message));
  }, []);
    console.log(data);
  return { data };
};
export default useProductFetch;
