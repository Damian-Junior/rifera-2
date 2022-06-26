/** @format */

import React, { useEffect, useState, useRef } from "react";
import { Spin, Card, Button, Modal } from "antd";
import location from "./location-icon.png";
import { StoreType } from "../../_shared/types";
import Coverflow from "react-coverflow";
type PropType = {
  data: Array<Record<string, any>>;
  logo: string;
};
const Products = (props: PropType) => {
  const { data, logo } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indivData, setIndivData] = useState([]);

  // // get same name to be display in the modal window
  // const showModal = (number: number) => {
  //   //select the specific data that matches the click store number
  //   const newData = data.filter((result) => result?.no === number);
  //   setIndivData(newData);
  //   setIsModalVisible(true);
  // };
  //
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
  //
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  const divRef = useRef();

  if (!data?.length) {
    return (
      <>
        <Spin
          size="large"
          style={{ verticalAlign: "middle", marginTop: "40px" }}
        />
      </>
    );
  }

  return (
    // @ts-ignore
    <Coverflow
      width={100}
      height={400}
      displayQuantityOfSide={1}
      navigation={false}
      enableHeading={false}
    >
      {data?.map((store, key) => {
        return (
          <Card
            hoverable
            className={"rif-relative h-50 rif-py-15 w-50"}
            cover={
              <img
                alt="example"
                src={logo}
                key={key}
                className={
                  "w-60 h-100 rif-br-50 rif-br-6 rif-mx-auto rif-mt-2 rif-bx-s"
                }
              />
            }
          >
            <h2 className={"w-100 rif-fs-1"}>{store?.name}</h2>
            {/*<p className="card-description">{store?.description}</p>*/}
            <Button
              htmlType="submit"
              className=" w-100 rif-bg-stlyed rif-white rif-fw-3 rif-br-10"
              onClick={() => {
                // showModal(store?.no);
                console.log("::::::::::", indivData);
              }}
            >
              View More
            </Button>
            <h1 className="rif-absolute rif-card-no rif-br-50 rif-text-center w-10 h-10 rif-fs-1">
              {store?.no}
            </h1>
          </Card>
        );
      })}
    </Coverflow>
  );
};
export default Products;
{
  /*<Modal*/
}
{
  /*  width="700px"*/
}
{
  /*  visible={isModalVisible}*/
}
{
  /*  onOk={handleOk}*/
}
{
  /*  onCancel={handleCancel}*/
}
{
  /*  className="modal-card"*/
}
{
  /*>*/
}
{
  /*  <img alt="example" src={logo} />*/
}
{
  /*  <h2>{indivData[0]?.name}</h2>*/
}
{
  /*  <p className="modal-card-description">*/
}
{
  /*    {indivData[0]?.description}*/
}
{
  /*  </p>*/
}
{
  /*  <div className="modal-div">*/
}
{
  /*    <h1 className="modal-card-likes"> {indivData[0]?.likes}</h1>*/
}
{
  /*    <h1 className="modal-card-no"> {indivData[0]?.no}</h1>*/
}
{
  /*    <h1 className="modal-card-votes"> {indivData[0]?.votes}</h1>*/
}
{
  /*  </div>*/
}
{
  /*  <h1 className="featured-product">Featured Products</h1>*/
}
{
  /*  <hr*/
}
{
  /*    style={{*/
}
{
  /*      width: "70%",*/
}
{
  /*      margin: "auto",*/
}
{
  /*      backgroundColor: "#48edb5",*/
}
{
  /*      height: "0.5em",*/
}
{
  /*    }}*/
}
{
  /*  />*/
}
{
  /*  <div ref={divRef} className="products-img" onClick={() => {}}>*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*    <img alt="example" src={logo} />*/
}
{
  /*  </div>*/
}
{
  /*  <span onClick={() => divRef.current.scrollBy(-30, 0)}>&lt;</span>*/
}
{
  /*  <span*/
}
{
  /*    id="span-right"*/
}
{
  /*    onClick={() => divRef.current.scrollBy(30, 0)}*/
}
{
  /*  >*/
}
{
  /*    &gt;*/
}
{
  /*  </span>*/
}
{
  /*  <Link to="/googlemap">*/
}
{
  /*    <img src={location} id="map-img" alt="store location" />*/
}
{
  /*  </Link>*/
}
{
  /*</Modal>*/
}
