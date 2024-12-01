import { Button, Col, Form, Image, Input, Row, Typography } from "antd";
import ServiceImg from "../../assets/service-1.jpg";
import { FaClock, FaDollarSign } from "react-icons/fa6";

const BookingDetails = () => {
  const [form] = Form.useForm();
  return (
    <div className="wrapper">
      <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-[#008dda]">
        BOOK APPOINTMENT
      </h1>
      <Row gutter={[32, 16]}>
        <Col span={24} md={{ span: 12 }}>
          <Typography.Title level={3}>
            Selected service and slot
          </Typography.Title>

          <Image
            preview={false}
            src={ServiceImg}
            alt="service"
            className="rounded-lg object-contain lg:object-cover lg:object-top"
            width={"100%"}
            height={"240px"}
          />
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-[#008dda]">
            Exterior Cleaning
          </h1>
          <div className="mb-4">
            <p className="text-lg flex items-center gap-1 mb-2">
              <FaClock />
              Duration: 60min
            </p>
            <p color="purple" className="text-lg flex items-center gap-1 mb-2">
              <FaDollarSign />
              Price: 100$
            </p>
            <p className="text-lg flex items-center gap-1 mb-2">
              Selected Date:
              <span className="bg-gray-300 px-2 py-1 rounded text-sm lg:text-lg">
                2024-12-02
              </span>
            </p>
            <p className="text-lg flex items-center gap-1 mb-2">
              Selected Slot:
              <span className="bg-gray-300 px-2 py-1 rounded text-sm lg:text-lg">
                09:30-10:30
              </span>
            </p>
          </div>
        </Col>
        <Col span={24} md={{ span: 12 }}>
          <Typography.Title level={3}>User Information</Typography.Title>
          <Form layout={"vertical"} form={form} style={{ maxWidth: 600 }}>
            <Row gutter={16} align={"middle"} justify={"start"}>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Full Name">
                  <Input placeholder="John Doe" type="text" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Email">
                  <Input placeholder="john@email.com" type="email" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Phone">
                  <Input prefix="+880" placeholder="1234567890" type="phone" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Address">
                  <Input
                    placeholder="221B Baker Street, London, England"
                    type="text"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Typography.Title level={3}>Vehicle Information</Typography.Title>
            <Row gutter={16} align={"middle"} justify={"start"}>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Vehicle Type">
                  <Input placeholder="SUV" type="text" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Vehicle Brand">
                  <Input placeholder="Toyota" type="text" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Vehicle Model">
                  <Input placeholder="Prada" type="text" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Manufacturing Year">
                  <Input placeholder="2011" type="text" />
                </Form.Item>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <Form.Item label="Registration Plate">
                  <Input placeholder="ABC123" type="text" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {"PAY NOW (AMARPAY)"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default BookingDetails;
