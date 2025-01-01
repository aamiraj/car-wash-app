import { Col, GetProps, Input, Row, Table, TableProps } from "antd";
import BookingCard from "../../../components/ui/BookingCard";
import { useGetMyBookingsQuery } from "../../../redux/api/bookingApi";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  _id: string;
  key: string;
  service: { name: string };
  slot: {
    startTime: string;
    endTime: string;
    date: string;
  };
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: string;
  registrationPlate: string;
}

const CustomerDashboard = () => {
  const { data, isFetching } = useGetMyBookingsQuery(undefined);
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const upcomingBookings = data?.data?.filter(
    (item: any) => new Date(item?.slot?.date).getTime() > new Date().getTime()
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Date",
      dataIndex: "slot.date",
      key: "date",
      fixed: "left",
      render: (_, record) => <p>{record?.slot?.date}</p>,
    },
    {
      title: "Vehicle",
      dataIndex: ["vehicleBrand", "vehicleModel", "manufacturingYear"],
      key: "vehicle",
      render: (_, record) => {
        return (
          <p>
            {record.vehicleBrand} {record.vehicleModel}{" "}
            {record.manufacturingYear}
          </p>
        );
      },
    },
    {
      title: "Service",
      dataIndex: "service.name",
      key: "service",
      render: (_, record) => <p>{record?.service?.name}</p>,
    },
    {
      title: "Selected Slot",
      key: "slot",
      dataIndex: ["startTime", "endTime"],
      render: (_, record) => (
        <p>
          {record?.slot?.startTime}-{record?.slot?.endTime}
        </p>
      ),
    },
    {
      title: "Plate No.",
      key: "registrationPlate",
      dataIndex: "registrationPlate",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">Upcoming Bookings</h1>
      <Row gutter={[16, 16]} className="mb-8">
        {upcomingBookings?.map((item: any, idx: number) => (
          <Col
            key={idx}
            span={24}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <BookingCard bookingData={item} />
          </Col>
        ))}
      </Row>
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
          dataSource={data?.data}
          pagination={false}
          scroll={{ x: true }}
          loading={isFetching}
          rowKey={(record) => record?._id}
        />
      </div>
    </div>
  );
};

export default CustomerDashboard;
