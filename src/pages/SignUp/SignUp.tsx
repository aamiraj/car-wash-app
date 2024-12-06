import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpUserMutation } from "../../redux/api/authApi";

interface TSignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const [signUp] = useSignUpUserMutation();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: TSignUpData) => {
    try {
      const signUpData = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        address: values.address,
        role: "user", // strictly signing up a new user as a "user"
      };

      messageApi.open({
        type: "loading",
        content: "Signing in...",
        duration: 0,
        key: "LOADING",
      });

      await signUp(signUpData).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully signed in. Redirecting to log in page.",
        key: "SUCCESS",
      });

      navigate("/log-in");
    } catch (error) {
      messageApi.destroy("LOADING");
      message.open({
        type: "error",
        content: "Sign up failed. Try again later.",
      });
    }
  };

  return (
    <>
      {contextHolder}
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
                {
                  pattern: /[A-Z]/,
                  message: "Must have an uppercase letter.",
                },
                {
                  pattern: /[a-z]/,
                  message: "Must have a lowercase letter.",
                },
                {
                  pattern: /[0-9]/,
                  message: "Must have a number.",
                },
                {
                  pattern: /[#?!@$%^&*-]/,
                  message: "Must have a special character.",
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
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="name"
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
                  message: "Please input your address!",
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
    </>
  );
};

export default SignUp;
