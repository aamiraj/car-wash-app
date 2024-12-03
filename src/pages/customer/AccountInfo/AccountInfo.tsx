import { Button, Col, Form, Input, Row } from "antd";

const AccountInfo = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Account Info</h1>
      <div>
        <Form layout={"vertical"} form={form} style={{ maxWidth: 600 }}>
          <Row gutter={[16, 16]}>
            <Col span={24} sm={{ span: 12 }}>
              <Form.Item label="Full Name">
                <Input defaultValue={"John Doe"} />
              </Form.Item>
              <Form.Item label="Role">
                <Input defaultValue={"Customer"} />
              </Form.Item>
              <Form.Item label="Email">
                <Input defaultValue={"john@email.com"} />
              </Form.Item>
              <Form.Item label="Phone">
                <Input defaultValue={"+8801XXXXXXXXX"} />
              </Form.Item>
            </Col>
            <Col span={24} sm={{ span: 12 }}>
              <Form.Item label="Address">
                <Input defaultValue={"221B Baker Street"} />
              </Form.Item>
              <Form.Item label="Post Office">
                <Input defaultValue={"Post Office -0001"} />
              </Form.Item>
              <Form.Item label="District">
                <Input defaultValue={"District"} />
              </Form.Item>
              <Form.Item label="Division">
                <Input defaultValue={"Division"} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" disabled>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AccountInfo;
