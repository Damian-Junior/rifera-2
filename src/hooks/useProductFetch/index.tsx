import { useEffect, useState } from "react";
import axios from "axios";

type StoreType = {
  Category: string;
  name: string;
  image: string;
  description: string;
  no: string;
  likes: string;
  votes: string;
  featuredProduct: Array<string>;
};
const useProductFetch = (product: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(" http://localhost:8000/store")
      .then((response) => {
        const productType: Array<Record<string, any>> = response.data.filter(
          (store: StoreType) => store.Category === product
        );
        setData(productType);
      })
      .catch((err) => console.log(err.message));
  }, [product]);

  return data ;
};
export default useProductFetch;
