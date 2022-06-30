import React from "react";
import { Button, Input, PageHeader } from "antd";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "./image/mar_1.jpg";
import image2 from "./image/mar_3.jpg";
import image3 from "./image/mar_4.jpg";

const Header = () => {
  type ImageType = {
    url: string;
  };
  const fadeImages: ImageType[] = [
    {
      url: image2,
    },
    {
      url: image1,
    },
    {
      url: image3,
    },
  ];
  return (
    <div className="site-page-header-ghost-wrapper ">
      <PageHeader
        className={"rif-mx-6 rif-br-2 rif-mx-4  "}
        ghost={false}
        backIcon={false}
        style={{
          borderRadius: "60% 40% 0% 100% / 0% 1% 99% 100%",
        }}
        title="RIFERA"
        subTitle={
          <Input
            placeholder="Search product..."
            className={"rif-input"}
            style={{ paddingLeft: 20 }}
            size={"large"}
          />
        }
        extra={[
          <Button key="3" className={"rif-btn"}>
            About
          </Button>,
          <Button key="2" className={"rif-btn"}>
            {" "}
            Categories
          </Button>,
          <Button key="1" type={"primary"}>
            Help
          </Button>,
        ]}
      ></PageHeader>
      <div className={" rif-m-6"}>
        <Fade className={"w-100 h-50 rif-b-1 rif-br-4"} arrows={false}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container ">
                <img
                  src={fadeImage.url}
                  className={"rif-slide-image rif-br-4"}
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};
export default Header;
