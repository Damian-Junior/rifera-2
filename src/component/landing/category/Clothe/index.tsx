import Rect from "react";
import useProductFetch from "../../../../hooks/useProductFetch";
import Products from "../../Products";
import logo from "./clothe.jpg";
const Clothe = () => {
  const { data } = useProductFetch("Clothing");
  return (
    <div>
      <Products data={data} logo={logo} />
    </div>
  );
};
export default Clothe;
