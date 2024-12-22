import {
  Card,
  Col,
  GetProps,
  Input,
  Row,
  Skeleton,
  Table,
  TableProps,
} from "antd";
import dayjs from "dayjs";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { useGetAllBookingsQuery } from "../../../redux/api/bookingApi";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  _id: string;
  service: {
    name: string;
  };
  customer: {
    name: string;
  };
  slot: {
    startTime: string;
    endTime: string;
  };
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  registrationPlate: string;
  createdAt: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "date",
    fixed: "left",
    render: (_value, record) => {
      const date = dayjs(new Date(record?.createdAt)).format("YYYY-MM-DD");
      return <p>{date}</p>;
    },
    sorter: (a, b) =>
      new Date(a?.createdAt).getMilliseconds() -
      new Date(b?.createdAt).getMilliseconds(),
    defaultSortOrder: "ascend",
  },
  {
    title: "Vehicle",
    dataIndex: ["vehicleBrand", "vehicleModel", "manufacturingYear"],
    key: "vehicle",
    render: (_, record) => {
      return (
        <p>
          {record.vehicleBrand} {record.vehicleModel} {record.manufacturingYear}
        </p>
      );
    },
  },
  {
    title: "Service",
    dataIndex: "service.name",
    key: "service",
    render: (_, record) => {
      return <p>{record?.service?.name}</p>;
    },
  },
  {
    title: "Selected Slot",
    key: "slot",
    dataIndex: ["slot.startTime", "slot.endTime"],
    render: (_, record) => (
      <p>
        {record?.slot?.startTime}-{record?.slot?.endTime}
      </p>
    ),
  },
  {
    title: "Customer",
    key: "customer",
    dataIndex: "customer.name",
    render: (_, record) => {
      return <p>{record?.customer?.name}</p>;
    },
  },
  {
    title: "Plate No.",
    key: "registrationPlate",
    dataIndex: "registrationPlate",
  },
];

const AdminDashboard = () => {
  const { data: bookingData, isFetching } = useGetAllBookingsQuery(undefined);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <>
      {isFetching ? (
        <Skeleton paragraph={{ rows: 10 }} />
      ) : (
        <div>
          <div className="mb-4">
            <Row gutter={[16, 16]}>
              <Col span={24} sm={{ span: 8 }}>
                <Card className="bg-slate-100">
                  <div className="text-2xl">
                    <FiTarget />
                    <p className="font-semibold">Recent Bookings</p>
                    <p className="text-[#008dda] text-4xl font-semibold">05</p>
                  </div>
                </Card>
              </Col>
              <Col span={24} sm={{ span: 8 }}>
                <Card className="bg-slate-100">
                  <div className="text-2xl">
                    <CiSettings />
                    <p className="font-semibold">Total Services</p>
                    <p className="text-[#008dda] text-4xl font-semibold">05</p>
                  </div>
                </Card>
              </Col>
              <Col span={24} sm={{ span: 8 }}>
                <Card className="bg-slate-100">
                  <div className="text-2xl">
                    <FaUsers />
                    <p className="font-semibold">All Users</p>
                    <p className="text-[#008dda] text-4xl font-semibold">05</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <h1 className="text-2xl font-semibold mb-4">Recent Bookings</h1>
          <div className="mb-4">
            <Search
              placeholder="Serch for bookings"
              onSearch={onSearch}
              style={{ maxWidth: 300 }}
              enterButton
            />
          </div>
          <div className="mb-4">
            <Table<DataType>
              columns={columns}
              dataSource={bookingData?.data}
              pagination={false}
              scroll={{ x: true }}
              rowKey={(record) => record?._id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;

// const data: DataType[] = [
//   {
//     key: "1",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
//   {
//     key: "2",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
//   {
//     key: "3",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
//   {
//     key: "4",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
//   {
//     key: "5",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
//   {
//     key: "6",
//     service: "Exterior Wash",
//     customer: "John Doe",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     vehicleBrand: "Toyota",
//     vehicleModel: "Alion",
//     manufacturingYear: "2020",
//     registrationPlate: "ABC123",
//   },
// ];
