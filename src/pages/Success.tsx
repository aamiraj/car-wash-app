import SuccessImg from "../assets/check.gif";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={SuccessImg} alt="success" width={300} height={300} />
      <p className="text-green-500 text-2xl font-bold">SUCCESS</p>
      <p className="text-blue-500 text-3xl font-bold">
        Service Booked & Payment Completed
      </p>
      <Link to={"/"} className="link">
        Back to home
      </Link>
    </div>
  );
};

export default Success;
