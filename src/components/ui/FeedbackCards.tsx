import { Avatar } from "antd";
import { FaStar, FaUser } from "react-icons/fa6";

interface TFeedback {
  customerName: string;
  customerEmail: string;
  review: string;
  rating: string;
  date: string;
}

const FeedbackCards = ({ feedback }: { feedback: TFeedback }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[300px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <Avatar size={"default"} icon={<FaUser />} />
          <p className="text-lg font-semibold">{feedback?.customerName}</p>
        </div>
        <div className="text-lg font-semibold flex items-center justify-start gap-2">
          <FaStar /> <span>{feedback?.rating}</span>
        </div>
      </div>
      <div>
        <span className="text-sm text-[#757575]">{feedback?.date}</span>
      </div>
      <div>
        <p>{feedback?.review}</p>
      </div>
    </div>
  );
};

export default FeedbackCards;
