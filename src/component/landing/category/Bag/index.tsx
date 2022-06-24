import Rect from "react";
import useProductFetch from "../../../../hooks/useProductFetch";
import Products from "../../Products";
import logo from "./bag.webp";
const Bag = () => {
  const { data } = useProductFetch("Bag");
  return (
    <div>
      <Products data={data} logo={logo} />
    </div>
  );
};
export default Bag;
