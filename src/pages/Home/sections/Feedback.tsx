import {
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
import { FaStar } from "react-icons/fa6";
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
  const [user, setUser] = useState("Miraj");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="py-10">
      {user ? (
        <div>
          <h1 className="header1">
            YOUR FEEDBACK
          </h1>
          <p className="header2">
            You are reviewing and rating as: John Doe
          </p>
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
      ) : (
        <Flex justify="center" align="center">
          <Flex justify="center" align="center" vertical>
            <Title level={3}>You need to log in to review and rate.</Title>
            <Link to="/log-in" className="log-in-btn">
              LOG IN
            </Link>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Feedback;
