import Rect from "react";
import useProductFetch from "../../../../hooks/useProductFetch";
import Products from "../../Products";
import logo from "./utensil.jpg";
const Utensils = () => {
  const { data } = useProductFetch("Foods");
  return (
    <div>
      <Products data={data} logo={logo} />
    </div>
  );
};
export default Utensils;
