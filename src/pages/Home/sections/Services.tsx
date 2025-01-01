import ServiceCard from "../../../components/ui/ServiceCard";
import { Col, Row, Skeleton } from "antd";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import { Link } from "react-router-dom";

const Services = () => {
  const { data, isLoading } = useGetAllServicesQuery({
    searchTerm: "",
    sort: "",
  });

  return (
    <div className="wrapper">
      <h1 className="header1">OUR SERVICES</h1>
      <p className="header2">Discover Our Car Wash Services</p>
      <div className="py-8">
        <Row gutter={[32, 16]}>
          {isLoading
            ? [1, 2, 3, 4].map((_item, idx) => (
                <Col
                  key={idx}
                  span={24}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
                </Col>
              ))
            : data?.data?.slice(0, 4)?.map((item: any, idx: number) => (
                <Col
                  key={idx}
                  span={24}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <ServiceCard key={idx} idx={idx} data={item} />
                </Col>
              ))}
        </Row>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/services"}
          className="px-4 py-1 bg-blue-500 uppercase rounded-lg text-white hover:text-blue-500 hover:bg-gray-100"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default Services;

// const services = [
//   {
//     _id: "1",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },

//   {
//     _id: "2",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
//   {
//     _id: "3",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
//   {
//     _id: "4",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
// ];
