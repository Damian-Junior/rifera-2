import React from "react";
import { Button, Input, PageHeader } from "antd";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import image1 from "./image/mar_1.jpg";
import image2 from "./image/mar_3.jpg";
import image3 from "./image/mar_4.jpg";

const Header = () => {

  const fadeImages = [
    {
      url: image2,
      caption: "First Slide",
    },
    {
      url: image1,
      caption: "Second Slide",
    },
    {
      url: image3,
      caption: "Third Slide",
    },
  ];
  return (
    <div className="site-page-header-ghost-wrapper" >
      <PageHeader
        ghost={false}
        backIcon={false}
        title="RIFERA"
        subTitle={<Input placeholder="Search product..." />}
        extra={[
          <Button key="3">About</Button>,
          <Button key="2">Contact</Button>,
          <Button key="1" type="primary">
            Help
          </Button>,
        ]}
      ></PageHeader>
      <div>
        <Fade className={"w-100 h-50 rif-b-1"} arrows={false}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container rif-px-6 rif-pt-6 rif-mt-8">
                <img src={fadeImage.url} className={"rif-slide-image"} />
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};
export default Header;
