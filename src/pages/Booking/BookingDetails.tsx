import {
  Button,
  Carousel,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Skeleton,
  Typography,
} from "antd";
import { FaClock, FaDollarSign } from "react-icons/fa6";
import { useAppSelector } from "../../redux/hooks";
import { useGetAServiceQuery } from "../../redux/api/serviceApi";
import { useNavigate, useParams } from "react-router-dom";
import { carBrands, carTypes, serviceImgs } from "../../constants";
import { useAddBookingMutation } from "../../redux/api/bookingApi";

interface TBookingData {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  registrationPlate: string;
}

const BookingDetails = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [form] = Form.useForm();
  const { serviceId } = useParams();
  const { data: serviceData, isFetching: serviceFetching } =
    useGetAServiceQuery(serviceId);
  const { slot } = useAppSelector((state) => state.slot);
  const [addBooking] = useAddBookingMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (values: TBookingData) => {
    try {
      const bookingData = {
        service: slot?.serviceId,
        slot: slot?.slotId,
        vehicleType: values?.vehicleType,
        vehicleBrand: values?.vehicleBrand,
        vehicleModel: values?.vehicleModel,
        manufacturingYear: values?.manufacturingYear,
        registrationPlate: values?.registrationPlate,
      };
      // console.log(bookingData);

      messageApi.open({
        type: "loading",
        content: "Adding booking...",
        duration: 0,
        key: "LOADING",
      });

      await addBooking(bookingData).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully booked. Redirecting to home page.",
        key: "SUCCESS",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error: any) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Booking failed due to server error. Try later.",
        key: "ERROR",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="wrapper">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-[#008dda]">
          BOOK APPOINTMENT
        </h1>
        <Row gutter={[32, 16]}>
          <Col span={24} md={{ span: 12 }}>
            <Typography.Title level={3}>
              Selected service and slot
            </Typography.Title>

            <Carousel effect="fade" autoplay style={{ marginBottom: 32 }}>
              {serviceImgs.map((item, idx) => (
                <img
                  key={idx}
                  src={item}
                  alt="service"
                  className="rounded-lg h-64 object-cover"
                />
              ))}
            </Carousel>

            {serviceFetching ? (
              <Skeleton active paragraph={{ rows: 10 }} />
            ) : (
              <>
                <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-[#008dda]">
                  {serviceData?.data?.name}
                </h1>
                <div className="mb-4">
                  <p className="text-lg flex items-center gap-1 mb-2">
                    <FaClock />
                    Duration: {serviceData?.data?.duration}min
                  </p>
                  <p
                    color="purple"
                    className="text-lg flex items-center gap-1 mb-2"
                  >
                    <FaDollarSign />
                    Price: {serviceData?.data?.price}$
                  </p>
                  <p className="text-lg flex items-center gap-1 mb-2">
                    Selected Date:
                    <span className="bg-gray-300 px-2 py-1 rounded text-sm lg:text-lg">
                      {slot?.date}
                    </span>
                  </p>
                  <p className="text-lg flex items-center gap-1 mb-2">
                    Selected Slot:
                    <span className="bg-gray-300 px-2 py-1 rounded text-sm lg:text-lg">
                      {slot?.startTime}-{slot?.endTime}
                    </span>
                  </p>
                </div>
              </>
            )}
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Typography.Title level={3}>User Information</Typography.Title>
            <Form
              layout={"vertical"}
              form={form}
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
            >
              <Row gutter={16} align={"middle"} justify={"start"}>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"fullName"}
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input placeholder="John Doe" type="text" />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"email"}
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="john@email.com" type="email" />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"phone"}
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone!",
                      },
                    ]}
                  >
                    <Input
                      prefix="+880"
                      placeholder="1234567890"
                      type="phone"
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"address"}
                    label="Address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your address!",
                      },
                    ]}
                  >
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
                  <Form.Item
                    name={"vehicleType"}
                    label="Vehicle Type"
                    rules={[
                      {
                        required: true,
                        message: "Please input your vehicle type!",
                      },
                    ]}
                  >
                    <Select
                      options={carTypes}
                      placeholder="Select vehicle type"
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"vehicleBrand"}
                    label="Vehicle Brand"
                    rules={[
                      {
                        required: true,
                        message: "Please input your vehicle brand!",
                      },
                    ]}
                  >
                    <Select
                      options={carBrands}
                      placeholder="Select vehicle brand"
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"vehicleModel"}
                    label="Vehicle Model"
                    rules={[
                      {
                        required: true,
                        message: "Please input your vehicle model!",
                      },
                    ]}
                  >
                    <Input placeholder="Prada" type="text" />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"manufacturingYear"}
                    label="Manufacturing Year"
                    rules={[
                      {
                        required: true,
                        message: "Please input your manufacturing year!",
                      },
                    ]}
                  >
                    <Input placeholder="2011" type="text" />
                  </Form.Item>
                </Col>
                <Col span={24} lg={{ span: 12 }}>
                  <Form.Item
                    name={"registrationPlate"}
                    label="Registration Plate"
                    rules={[
                      {
                        required: true,
                        message: "Please input your registration plate!",
                      },
                    ]}
                  >
                    <Input placeholder="ABC123" type="text" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                {/* <Button type="primary" htmlType="submit">
                {"PAY NOW (AMARPAY)"}
              </Button> */}
                <Button type="primary" htmlType="submit" disabled={!user}>
                  {"BOOK NOW"}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BookingDetails;
