import { Card, Tag } from "antd";
import { FaClock, FaDollarSign, FaEye } from "react-icons/fa6";
// import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";
import Service1 from "../../assets/service-1.jpg";
import Service2 from "../../assets/service-2.png";
import Service3 from "../../assets/service-3.png";
import Service4 from "../../assets/service-4.jpg";
import Service5 from "../../assets/service-5.jpg";
import Service6 from "../../assets/service-6.jpg";
import Service7 from "../../assets/service-7.jpg";

const serviceImg = [
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
];

interface TService {
  _id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

// const BookNow = () => (
//   <Button
//     key="book-now"
//     type="primary"
//     htmlType="button"
//     className="flex justify-center items-center gap-1"
//   >
//     <TbHandClick />
//     <span>BOOK NOW</span>
//   </Button>
// );

const SeeDetails = ({ id }: { id: string }) => (
  <Link
    key="see-details"
    to={`/services/${id}`}
    className="pill-btn flex justify-center items-center gap-2"
  >
    <FaEye className="text-lg" />
    <span>See Details</span>
  </Link>
);

const ServiceCard = ({ idx, data }: { idx: number; data: TService }) => {
  return (
    <Card
      cover={<img src={serviceImg[idx]} alt="service" />}
      style={{ position: "relative", backgroundColor: "rgb(247 238 221 / 30%)", maxWidth: 300, height: "100%" }}
    >
      <h3 className="text-[#008dda] text-xl xl:text-2xl font-semibold mb-4">
        {data.name}
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <Tag color="blue" className="flex items-center gap-1">
          <FaClock />
          {data.duration}min
        </Tag>
        <Tag color="purple" className="flex items-center gap-1">
          <FaDollarSign />
          {data.price}$
        </Tag>
      </div>
      <p className="mb-8 line-clamp-3">{data.description}</p>
      <div className="absolute left-2 bottom-2 flex flex-col lg:flex-row lg:items-center justify-start gap-2">
        {/* <BookNow /> */}
        <SeeDetails id={data._id} />
      </div>
    </Card>
  );
};

export default ServiceCard;
