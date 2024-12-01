import {
  Avatar,
  Button,
  Col,
  Flex,
  Form,
  FormProps,
  Rate,
  Row,
  Typography,
} from "antd";
import { Input } from "antd";
import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

type FieldType = {
  review?: string;
  rating?: string;
};

const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

const Feedback = () => {
  const [value, setValue] = useState(3);
  const [feedback, setFeedback] = useState(false);
  const [user, setUser] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      {feedback ? (
        <div className="wrapper">
          <h1 className="header1">FEEDBACKS</h1>
          <p className="header2">Feedbacks given by all users</p>
          <div className="mt-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-6xl font-bold text-[#008dda]">3.5/5.0</h1>
              <Rate
                disabled
                defaultValue={3.5 - 1}
                allowHalf
                character={<FaStar className="text-4xl md:text-7xl" />}
              />
            </div>
            {/* feedback cards here  */}
            <div className="mt-10 flex flex-col items-center justify-center gap-8">
              <FeedbackCards />
              <FeedbackCards />
              <FeedbackCards />
              <FeedbackCards />
              <Button htmlType="button" type="primary">
                SEE ALL REVIEWS
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapper relative">
          {user ? <div></div> : <LogIn />}
          <h1 className="header1">YOUR FEEDBACK</h1>
          <p className="header2">You are reviewing and rating as: John Doe</p>
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
                    <TextArea rows={5} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;

const FeedbackCards = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <Avatar size={"default"} icon={<FaUser />} />
          <p className="text-lg font-semibold">John Doe</p>
        </div>
        <div className="text-lg font-semibold flex items-center justify-start gap-2">
          <FaStar /> <span>3</span>
        </div>
      </div>
      <div>
        <span className="text-sm text-[#757575]">Sep 21, 2024</span>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </p>
      </div>
    </div>
  );
};

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
