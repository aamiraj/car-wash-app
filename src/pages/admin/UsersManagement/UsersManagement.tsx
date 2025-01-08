import { GetProps, Input, message, Select, Table, TableProps } from "antd";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../../redux/api/userApi";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  key: string;
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

const UsersManagement = () => {
  const { data: usersData, isFetching } = useGetAllUsersQuery(undefined);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const handleChange = async (id: string, value: string) => {
    console.log(id, value);
    try {
      await updateUserRole({ id: id, role: value }).unwrap();
      messageApi.success("User role updated successfully.");
    } catch (error) {
      messageApi.error("Something went wrong.");
    }
  };

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
      render: (value, record) => (
        <Select
          options={[
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
          ]}
          defaultValue={value}
          onChange={(value) => handleChange(record?._id, value)}
        ></Select>
      ),
    },
  ];

  return (
    <div>
      {contextHolder}
      <h1 className="text-2xl font-semibold mb-4">Users Management</h1>
      <div className="mb-4">
        <Search
          placeholder="Search for users"
          onSearch={onSearch}
          style={{ maxWidth: 300 }}
          enterButton
        />
      </div>
      <div className="mb-4">
        <Table<DataType>
          columns={columns}
          dataSource={usersData?.data}
          loading={isFetching}
          pagination={false}
          scroll={{ x: true }}
          rowKey={(record) => record?._id}
        />
      </div>
    </div>
  );
};

export default UsersManagement;

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "superAdmin",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "2",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "admin",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "3",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "customer",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "4",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "customer",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "5",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "customer",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "6",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "customer",
//     address: "221B Bakar Street, London, England",
//   },
//   {
//     key: "7",
//     name: "John Doe",
//     email: "john@email.com",
//     phone: "+8801234567890",
//     role: "customer",
//     address: "221B Bakar Street, London, England",
//   },
// ];
