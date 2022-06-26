import Rect from "react";
import useProductFetch from "../../../../hooks/useProductFetch";
import Products from "../../Products";
import logo from "./shoe.jpg";
const Shoe = () => {
  const { data } = useProductFetch("Shoes");
  return (
    <div>
      <Products data={data} logo={logo} />
    </div>
  );
};
export default Shoe;
