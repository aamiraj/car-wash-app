import {
  Button,
  Col,
  Flex,
  Form,
  FormProps,
  message,
  Rate,
  Row,
  Typography,
} from "antd";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {
  useAddFeedbackMutation,
  useGetAllFeedbacksQuery,
} from "../../../redux/api/feedbackApi";
import { useAppSelector } from "../../../redux/hooks";
import dayjs from "dayjs";
import FeedbackCards from "../../../components/ui/FeedbackCards";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

type FieldType = {
  review?: string;
  rating?: string;
};

const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

const Feedback = () => {
  const [overallRating, setOverallRating] = useState(1);
  const user = useAppSelector((state) => state.auth.user);

  const { data: feedback } = useGetAllFeedbacksQuery(undefined);
  const [addFeedback] = useAddFeedbackMutation();

  const [value, setValue] = useState(3);

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const newDate = dayjs().format("YYYY-MM-DD");

      const feedbackData = {
        review: values?.review,
        rating: value,
        date: newDate,
        customerEmail: user?.email,
      };

      messageApi.destroy("LOADING");

      await addFeedback(feedbackData).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully added your review.",
        key: "SUCCESS",
      });
    } catch (error) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Review is failed.",
        key: "ERROR",
      });
    }
  };

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
      {contextHolder}
      <div className="wrapper relative">
        {user ? <div></div> : <LogIn />}
        <h1 className="header1">FEEDBACKS</h1>
        <p className="header2">Feedbacks given by all customers</p>
        <div className="py-8 max-w-[600px] mx-auto">
          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row gutter={[32, 16]} align={"middle"}>
              <Col span={24}>
                <Paragraph>Your Rating</Paragraph>
                <Flex gap="middle" vertical>
                  <Rate
                    tooltips={desc}
                    onChange={setValue}
                    value={value}
                    character={<FaStar className="text-4xl md:text-7xl" />}
                  />
                  {value ? <Title level={4}>{desc[value - 1]}</Title> : null}
                </Flex>
              </Col>
              <Col span={24}>
                <Form.Item<FieldType> label="Your Review" name="review">
                  <TextArea rows={2} />
                </Form.Item>
              </Col>
            </Row>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <div className="mt-10">
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
            {/* feedback cards here  */}
            <div className="mt-10 flex flex-col items-center justify-center gap-8">
              {feedback?.data?.slice(0, 2)?.map((item: any, idx: number) => (
                <FeedbackCards key={idx} feedback={item} />
              ))}
              <Button
                htmlType="button"
                type="primary"
                disabled={!feedback?.data?.length}
                onClick={() => navigate("/reviews")}
              >
                SEE ALL REVIEWS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

const LogIn = () => {
  return (
    <Flex justify="center" align="center" className="black-overlay">
      <Flex justify="center" align="center" gap={32} vertical>
        <h3 className="text-white text-center text-lg md:text-2xl">
          You need to log in to review and rate.
        </h3>
        <Link to="/log-in" className="pill-btn">
          LOG IN
        </Link>
      </Flex>
    </Flex>
  );
};
