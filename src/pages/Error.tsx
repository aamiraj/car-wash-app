import ErrorImg from "../assets/error.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={ErrorImg} alt="success" width={300} height={300} />
      <p className="text-red-500 text-2xl font-bold">ERROR</p>
      <p className="text-blue-500 text-3xl font-bold">
        Service Booked & Payment Failed
      </p>
      <Link to={"/"} className="link">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
