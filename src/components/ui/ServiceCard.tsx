import { Button, Card, Tag } from "antd";
import { FaClock, FaDollarSign, FaEye } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";

interface TService {
  _id: string;
  img: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

const BookNow = () => (
  <Button
    key="book-now"
    type="primary"
    htmlType="button"
    className="flex justify-center items-center gap-1"
  >
    <TbHandClick />
    <span>BOOK NOW</span>
  </Button>
);

const SeeDetails = ({ id }: { id: string }) => (
  <Link
    key="see-details"
    to={`/services/${id}`}
    className="flex justify-center items-center gap-1"
  >
    <FaEye />
    <span>SEE DETAILS</span>
  </Link>
);

const ServiceCard = ({ data }: { data: TService }) => {
  return (
    <Card
      hoverable
      cover={<img src={data.img} alt="service" />}
      style={{ backgroundColor: "rgb(247 238 221 / 30%)", maxWidth: 300 }}
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
      <p className="mb-4">{data.description}</p>
      <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-2">
        <BookNow />
        <SeeDetails id={data._id} />
      </div>
    </Card>
  );
};

export default ServiceCard;
