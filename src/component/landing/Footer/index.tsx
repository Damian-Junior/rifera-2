import { Badge } from "antd";
import { FaArrowCircleUp } from "react-icons/fa";

import useAppTheme from "../../../hooks/useAppTheme";
import { ReactComponent as Facebook } from "../../_shared/assests/svg/Facebook.svg";
import { ReactComponent as FacebookLight } from "../../_shared/assests/svg/FacebookLight.svg";
import { ReactComponent as Instagram } from "../../_shared/assests/svg/Instagram.svg";
import { ReactComponent as InstagramLight } from "../../_shared/assests/svg/InstagramLight.svg";
import { ReactComponent as Twitter } from "../../_shared/assests/svg/Twitter.svg";
import { ReactComponent as TwitterLight } from "../../_shared/assests/svg/TwitterLight.svg";
import { ReactComponent as LinkedIn } from "../../_shared/assests/svg/LinkedIn.svg";
import { ReactComponent as LinkedInLight } from "../../_shared/assests/svg/LinkedInLight.svg";

const Footer = () => {
  const { theme } = useAppTheme();

  return (
    <div className={` rif-p-10 `}>
      <div className={"rif-text-center"}>
        <div
          className={"rif-fs-1 rif-mb-2"}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowCircleUp style={{ color: "#48edb5" }} /> <br />
          Back to top
        </div>
      </div>
      <div className={"rif-flex rif-justify-evenly"}>
        <div className={"rif-pr-20 rif-block"}>
          <div className={"rif-fs-2 rif-fw-5"}>Rifera</div>
          <Badge status="processing" text="FAQs" color={"#48edb5"} />
          <br />
          <Badge
            status="processing"
            color={"#48edb5"}
            text="Terms & Condition"
          />
          <br />
          <Badge status="processing" text="Privacy policy" color={"#48edb5"} />
        </div>
        <div>
          <div className={"rif-fs-2 rif-fw-5"}>Support</div>
          <Badge status="processing" text="Customer care" color={"#48edb5"} />
          <br />
          <Badge status="processing" text="Quick chat" color={"#48edb5"} />
        </div>
      </div>
      <div className={"rif-text-center"}>
        <div className={"rif-fs-1 rif-mb-6 rif-mt-4"}>Connect with us</div>
        <div className={"rif-flex rif-justify-between w-50 rif-mx-auto"}>
          {theme === "light" && (
            <>
              <Facebook
                data-testid="facebook"
                fill={"green"}
                stroke={"green"}
              />
              <Instagram data-testid="instagram" />
              <Twitter data-testid="twitter" />
              <LinkedIn data-testid="linkdin" />
            </>
          )}
          {theme === "dark" && (
            <>
              <FacebookLight
                style={{ backgroundColor: "#48edb5" }}
                fill={"#48edb5"}
                stroke={"#48edb5"}
              />
              <InstagramLight />
              <TwitterLight />
              <LinkedInLight />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Footer;
