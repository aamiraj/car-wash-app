import React from "react";
import { Button, Form, Input } from "antd";
import { FaUserCircle } from "react-icons/fa";

const LogIn: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <div className="w-[300px] md:w-[600px] border-2 rounded-lg px-4 py-8 mx-8">
        <div className="flex flex-col items-center gap-2">
          <FaUserCircle className="header1" />
          <h1 className="header1">Log In</h1>
        </div>
        <Form
          layout="vertical"
          form={form}
          name="login"
          onFinish={onFinish}
          style={{
            width: "100%",
            maxWidth: 424,
            margin: "16px auto",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="log-in-btn">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
