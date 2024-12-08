import { Col, Row } from "antd";
import ServiceCard from "../../components/ui/ServiceCard";
import Service1 from "../../assets/service-1.jpg";

const services = [
  {
    _id: "1",
    img: Service1,
    name: "Exterior Cleaning",
    duration: 60,
    price: 50,
    description:
      "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
  },

  {
    _id: "2",
    img: Service1,
    name: "Exterior Cleaning",
    duration: 60,
    price: 50,
    description:
      "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
  },
  {
    _id: "3",
    img: Service1,
    name: "Exterior Cleaning",
    duration: 60,
    price: 50,
    description:
      "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
  },
  {
    _id: "4",
    img: Service1,
    name: "Exterior Cleaning",
    duration: 60,
    price: 50,
    description:
      "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
  },
];

const OurServices = () => {
  return (
    <div className="wrapper">
      <h1 className="header1">Our Services</h1>
      <h2 className="header2">You can filter and sort these services</h2>
      <div className="py-8">
        <Row gutter={[32, 16]}>
          {services.map((item, idx) => (
            <Col span={24} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
              <ServiceCard key={idx} idx={idx} data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
