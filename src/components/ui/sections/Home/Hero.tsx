import { Button, Col, Image, Row } from "antd";
import Hero1 from "../../../../assets/hero-1.jpg";
import Hero2 from "../../../../assets/hero-2.jpg";
import { TbHandClick } from "react-icons/tb";

const coloredText = {
  color: "#008dda",
};

const imageStyle1: React.CSSProperties = {
  borderRadius: "50%",
  maxWidth: "400px",
};

const imageStyle2: React.CSSProperties = {
  height: "400px",
  maxWidth: "200px",
  objectFit: "cover",
  borderRadius: "100px",
};

const Hero = () => {
  return (
    <Row align={"middle"} gutter={8}>
      <Col span={24} order={2} lg={{ span: 8, order: 1 }}>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
          <h1 className="text-center font-bold text-3xl lg:text-start lg:text-5xl">
            <span style={coloredText}>Expert</span> Car Washing <br /> Service
            Provider
          </h1>
          <p className="text-center lg:text-start text-base lg:text-lg font-semibold">
            Don't want to get your hands dirty?
            <br />
            Don't have enough time to clean your car?
            <br />
            Then call us, we can take care of it.
          </p>
          <Button type="primary" htmlType="button" icon={<TbHandClick />}>
            BOOK FOR NOW
          </Button>
        </div>
      </Col>
      <Col span={24} order={1} lg={{ span: 16, order: 2 }}>
        <div className="flex items-center justify-center lg:gap-8">
          <Image preview={false} src={Hero1} style={imageStyle1} />
          <Image
            preview={false}
            src={Hero2}
            style={imageStyle2}
            className="hidden lg:block"
          />
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
