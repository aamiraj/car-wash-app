import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <div className="w-[300px] md:w-[600px] border-2 rounded-lg px-4 py-8 mx-8">
        <div className="flex flex-col items-center gap-2">
          <FaUserCircle className="header1" />
          <h1 className="header1">Create Account</h1>
        </div>
        <Form
          layout="vertical"
          form={form}
          name="register"
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
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="fullname"
            label="Full Name"
            tooltip="Put your first name and last name altogether."
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please select your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={"+88"} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Should accept terms and conditons")
                      ),
              },
            ]}
          >
            <Checkbox>
              I have read the{" "}
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="pill-btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
