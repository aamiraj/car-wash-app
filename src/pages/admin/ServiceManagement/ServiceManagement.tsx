import { Table, Input, GetProps, TableProps, Space, Button } from "antd";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  key: string;
  _id: string;
  service: string;
  price: string;
  duration: string;
  createdAt: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
    fixed: "left",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (value) => <p>${value}</p>,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    render: (value) => <p>{value}min</p>,
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, _record) => {
      return (
        <Space>
          <Button type="text" htmlType="button">
            <FaEdit className="text-lime-500" />
          </Button>
          <Button type="text" htmlType="button">
            <FaTrash className="text-rose-500" />
          </Button>
        </Space>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    _id: "1",
    service: "Exterior Clean",
    price: "1200",
    duration: "60",
    createdAt: "2024-11-01",
  },
  {
    key: "2",
    _id: "2",
    service: "Exterior Clean",
    price: "1200",
    duration: "60",
    createdAt: "2024-11-01",
  },
  {
    key: "3",
    _id: "3",
    service: "Exterior Clean",
    price: "1200",
    duration: "60",
    createdAt: "2024-11-01",
  },
  {
    key: "4",
    _id: "4",
    service: "Exterior Clean",
    price: "1200",
    duration: "60",
    createdAt: "2024-11-01",
  },
  {
    key: "5",
    _id: "5",
    service: "Exterior Clean",
    price: "1200",
    duration: "60",
    createdAt: "2024-11-01",
  },
];

const ServiceManagement = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Service Management</h1>
      <div className="mb-4">
        <Search
          placeholder="Serch for services"
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

export default ServiceManagement;
