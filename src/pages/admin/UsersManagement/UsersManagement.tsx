import { GetProps, Input, Table, TableProps } from "antd";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  key: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    key: "address",
    dataIndex: "address",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (value) => {
      let color;
      switch (value) {
        case "superAdmin":
          color = "purple";
          break;
        case "admin":
          color = "green";
          break;
        default:
          color = "orange";
      }
      return (
        <p style={{ textTransform: "capitalize", color: color }}>{value}</p>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "superAdmin",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "2",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "admin",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "3",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "customer",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "4",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "customer",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "5",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "customer",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "6",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "customer",
    address: "221B Bakar Street, London, England",
  },
  {
    key: "7",
    name: "John Doe",
    email: "john@email.com",
    phone: "+8801234567890",
    role: "customer",
    address: "221B Bakar Street, London, England",
  },
];

const UsersManagement = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Users Management</h1>
      <div className="mb-4">
        <Search
          placeholder="Serch for users"
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

export default UsersManagement;
