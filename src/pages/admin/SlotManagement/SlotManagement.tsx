import { GetProps, Input, Table, TableProps } from "antd";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  key: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    fixed: "left",
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "End Time",
    key: "endTime",
    dataIndex: "endTime",
  },
  {
    title: "Duration",
    key: "duration",
    dataIndex: "duration",
    render: (value) => <p>{value}min</p>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (value) => (
      <p
        className={value === "available" ? "text-green-500" : "text-red-500"}
        style={{ textTransform: "capitalize" }}
      >
        {value}
      </p>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    service: "Exterior Wash",
    date: "2024-11-21",
    startTime: "09:30",
    endTime: "10:30",
    duration: "60",
    status: "available",
  },
  {
    key: "2",
    service: "Exterior Wash",
    date: "2024-11-21",
    startTime: "09:30",
    endTime: "10:30",
    duration: "60",
    status: "canceled",
  },
  {
    key: "3",
    service: "Exterior Wash",
    date: "2024-11-21",
    startTime: "09:30",
    endTime: "10:30",
    duration: "60",
    status: "available",
  },
  {
    key: "4",
    service: "Exterior Wash",
    date: "2024-11-21",
    startTime: "09:30",
    endTime: "10:30",
    duration: "60",
    status: "available",
  },
];

const SlotManagement = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Slot Management</h1>
      <div className="mb-4">
        <Search
          placeholder="Serch for slots"
          onSearch={onSearch}
          style={{ maxWidth: 300 }}
          enterButton
        />
      </div>
      <div className="mb-4">
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default SlotManagement;
