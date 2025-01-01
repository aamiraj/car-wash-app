import { useGetAllFeedbacksQuery } from "../../redux/api/feedbackApi";
import FeedbackCards from "../../components/ui/FeedbackCards";
import { Rate } from "antd";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [overallRating, setOverallRating] = useState(1);

  const { data: feedback } = useGetAllFeedbacksQuery(undefined);

  useEffect(() => {
    const dataLength = feedback?.data?.length;
    if (!!!dataLength) return;
    let sum = 0;
    feedback?.data?.forEach((item: any) => {
      sum = sum + item?.rating;
    });
    const rating = sum / dataLength;
    setOverallRating(rating);
  }, [feedback?.data]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-bold text-[#008dda]">
          {overallRating.toFixed(1)}/5.0
        </h1>
        <Rate
          disabled
          value={overallRating}
          allowHalf
          character={<FaStar className="text-4xl md:text-7xl" />}
        />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-8">
        {feedback?.data?.map((item: any, idx: number) => (
          <FeedbackCards key={idx} feedback={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
