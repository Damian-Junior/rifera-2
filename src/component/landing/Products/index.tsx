/** @format */

import React, { useEffect, useState, useRef } from "react";
import { Spin, Card, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import location from "./location-icon.png";

type PropType = {
  data: Record<string, any>;
  logo: string;
};
const Products = (props: PropType) => {
  const { data, logo } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indivData, setIndivData] = useState([]);

  // get same name to be display in the modal window
  const showModal = (number) => {
    //select the specific data that matches the click store number
    const newData = data.filter((result) => result?.no === number);
    setIndivData(newData);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
    <div className="home">
      {data?.map((store) => {
        return (
          <div className="row">
            <Card
              hoverable
              className="row-card"
              key={Math.random() * 10}
              style={{ width: 300 }}
              cover={<img alt="example" src={logo} />}
            >
              <h2>{store?.name}</h2>
              <p className="card-description">{store?.description}</p>
              <Button
                type="primary"
                htmlType="submit"
                className="card-btn"
                onClick={() => {
                  showModal(store?.no);
                  console.log("::::::::::", indivData);
                }}
              >
                View More
              </Button>
              <h1 className="card-no"> {store?.no} </h1>
            </Card>
            <Modal
              width="700px"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className="modal-card"
            >
              <img alt="example" src={logo} />

              <h2>{indivData[0]?.name}</h2>
              <p className="modal-card-description">
                {indivData[0]?.description}
              </p>

              <div className="modal-div">
                <h1 className="modal-card-likes"> {indivData[0]?.likes}</h1>
                <h1 className="modal-card-no"> {indivData[0]?.no}</h1>
                <h1 className="modal-card-votes"> {indivData[0]?.votes}</h1>
              </div>
              <h1 className="featured-product">Featured Products</h1>
              <hr
                style={{
                  width: "70%",
                  margin: "auto",
                  backgroundColor: "#48edb5",
                  height: "0.5em",
                }}
              />
              <div ref={divRef} className="products-img" onClick={() => {}}>
                <img alt="example" src={logo} />
                <img alt="example" src={logo} />
                <img alt="example" src={logo} />
                <img alt="example" src={logo} />
                <img alt="example" src={logo} />
                <img alt="example" src={logo} />
              </div>
              <span onClick={() => divRef.current.scrollBy(-30, 0)}>&lt;</span>
              <span
                id="span-right"
                onClick={() => divRef.current.scrollBy(30, 0)}
              >
                &gt;
              </span>
              <Link to="/googlemap">
                <img src={location} id="map-img" alt="store location" />
              </Link>
            </Modal>
            ;
          </div>
        );
      })}
    </div>
  );
};
export default QueryForm;
