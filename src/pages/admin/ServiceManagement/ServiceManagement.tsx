import {
  Table,
  Input,
  GetProps,
  TableProps,
  Space,
  Button,
  Skeleton,
} from "antd";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import dayjs from "dayjs";
import AddServiceModal from "./AddServiceModal";
import { useState } from "react";
import EditServiceModal from "./EditServiceModal";
import DeleteServiceModal from "./DeleteServiceModal";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  _id: string;
  key: string;
  name: string;
  price: string;
  duration: string;
  createdAt: string;
}

const ServiceManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const { data: servicesData, isFetching } = useGetAllServicesQuery(undefined);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (id: string) => {
    setServiceId(id);
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = (id: string) => {
    setServiceId(id);
    setIsDeleteModalOpen(true);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Service",
      dataIndex: "name",
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
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="text"
              htmlType="button"
              onClick={() => handleOpenEditModal(record?._id)}
            >
              <FaEdit className="text-lime-500" />
            </Button>
            <Button
              type="text"
              htmlType="button"
              onClick={() => handleOpenDeleteModal(record?._id)}
            >
              <FaTrash className="text-rose-500" />
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {isFetching ? (
        <Skeleton paragraph={{ rows: 10 }} />
      ) : (
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
          <div className="mb-2">
            <Button
              onClick={handleOpenAddModal}
              htmlType="button"
              type="default"
              title="Add service"
              block
            >
              <FaPlusCircle />
            </Button>
          </div>
          <AddServiceModal
            isOpen={isAddModalOpen}
            setIsOpen={setIsAddModalOpen}
          />
          <EditServiceModal
            isOpen={isEditModalOpen}
            setIsOpen={setIsEditModalOpen}
            id={serviceId}
          />
          <DeleteServiceModal
            isOpen={isDeleteModalOpen}
            setIsOpen={setIsDeleteModalOpen}
            id={serviceId}
          />
          <div className="mb-4">
            <Table<DataType>
              key={"_id"}
              columns={columns}
              loading={isFetching}
              dataSource={servicesData?.data}
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

export default ServiceManagement;

// const data: DataType[] = [
//   {
//     key: "1",
//     _id: "1",
//     service: "Exterior Clean",
//     price: "1200",
//     duration: "60",
//     createdAt: "2024-11-01",
//   },
//   {
//     key: "2",
//     _id: "2",
//     service: "Exterior Clean",
//     price: "1200",
//     duration: "60",
//     createdAt: "2024-11-01",
//   },
//   {
//     key: "3",
//     _id: "3",
//     service: "Exterior Clean",
//     price: "1200",
//     duration: "60",
//     createdAt: "2024-11-01",
//   },
//   {
//     key: "4",
//     _id: "4",
//     service: "Exterior Clean",
//     price: "1200",
//     duration: "60",
//     createdAt: "2024-11-01",
//   },
//   {
//     key: "5",
//     _id: "5",
//     service: "Exterior Clean",
//     price: "1200",
//     duration: "60",
//     createdAt: "2024-11-01",
//   },
// ];
