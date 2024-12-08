import {
  Button,
  Carousel,
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Row,
  Skeleton,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { FaClock, FaDollarSign } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useGetAServiceQuery } from "../../redux/api/serviceApi";
import { useGetSlotsOfServiceQuery } from "../../redux/api/slotApi";
import { useState } from "react";
import Service1 from "../../assets/service-1.jpg";
import Service2 from "../../assets/service-2.png";
import Service3 from "../../assets/service-3.png";
import Service5 from "../../assets/service-5.jpg";
import Service6 from "../../assets/service-6.jpg";
import Service7 from "../../assets/service-7.jpg";

interface DataType {
  key: React.Key;
  startTime: string;
  endTime: string;
  availablity: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
  },
  {
    title: "Availablity",
    dataIndex: "availablity",
    key: "availablity",
  },
];

const serviceImgs = [
  Service1,
  Service2,
  Service3,
  Service5,
  Service6,
  Service7,
];

const DetailsService = () => {
  const defaultDate = dayjs();
  const [date, setDate] = useState(defaultDate);
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { data: serviceData, isFetching: serviceFetching } =
    useGetAServiceQuery(serviceId);
  const { data: slotsData, isFetching: slotsFetching } =
    useGetSlotsOfServiceQuery({
      serviceId: serviceId as string,
      date: date.format("YYYY-MM-DD"),
    });

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const onChange: DatePickerProps["onChange"] = (_, dateStr) => {
    console.log("onChange:", dateStr);
    const selectedDate = dayjs(dateStr as string);
    setDate(selectedDate);
  };

  return (
    <div className="wrapper">
      <Row gutter={[32, 16]}>
        <Col span={24} md={{ span: 12 }}>
          <Carousel effect="fade" autoplay style={{ marginBottom: 32 }}>
            {serviceImgs.map((item) => (
              <img
                src={item}
                alt="service"
                className="rounded-lg h-64 object-cover"
              />
            ))}
          </Carousel>
          {serviceFetching ? (
            <Skeleton avatar active paragraph={{ rows: 10 }} />
          ) : (
            <>
              <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                {serviceData?.data?.name}
              </h1>
              <div className="mb-4">
                <p className="text-lg flex items-center gap-1">
                  <FaClock />
                  Duration: {serviceData?.data?.duration}min
                </p>
                <p color="purple" className="text-lg flex items-center gap-1">
                  <FaDollarSign />
                  Price: {serviceData?.data?.price}$
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold mb-4">
                  Description
                </h3>
                <p className="text-justify">{serviceData?.data?.description}</p>
              </div>
            </>
          )}
        </Col>
        <Col span={24} md={{ span: 12 }}>
          <h3 className="text-lg font-semibold md:text-2xl mb-4">Slots</h3>
          <div className="mb-4">
            <span>Date: </span>
            <DatePicker onChange={onChange} defaultValue={date} />
          </div>

          {slotsFetching ? (
            <Skeleton active paragraph={{ rows: 5 }} />
          ) : (
            <div>
              <Table
                rowSelection={{ type: "radio", ...rowSelection }}
                columns={columns}
                dataSource={slotsData}
                pagination={false}
              />
            </div>
          )}

          <Divider />
          <Button
            onClick={() => navigate(`/booking/${serviceId}`)}
            type="default"
            htmlType="button"
            className="pill-btn"
            disabled={!slotsData?.length}
          >
            Book This Service
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DetailsService;

// const data: DataType[] = [
//   {
//     key: "1",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
//   {
//     key: "2",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
//   {
//     key: "3",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
//   {
//     key: "4",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
//   {
//     key: "5",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
//   {
//     key: "6",
//     startTime: "09:30",
//     endTime: "10:30",
//     availablity: "Available",
//   },
// ];
