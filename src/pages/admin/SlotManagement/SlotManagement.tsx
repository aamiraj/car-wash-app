import {
  Button,
  GetProps,
  Input,
  message,
  Select,
  Skeleton,
  Table,
  TableProps,
} from "antd";
import {
  useChangeSlotStatusMutation,
  useGetAllSlotsQuery,
} from "../../../redux/api/slotApi";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import AddSlotModal from "./AddSlotModal";

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

interface DataType {
  key: string;
  _id: string;
  name: string;
  service: {
    name: string;
    duration: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  status: string;
}

const SlotManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { data, isFetching } = useGetAllSlotsQuery(undefined);
  const [changeSlotStatus] = useChangeSlotStatusMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = async (id: string, value: string) => {
    console.log(`${id} ${value}`);
    try {
      await changeSlotStatus({ id: id, slotStatus: value }).unwrap();
      messageApi.success("Changed the slot status successfully.");
    } catch (error) {
      messageApi.error("Something went wrong!");
    }
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      fixed: "left",
      sorter: (a, b) =>
        new Date(a?.date).getTime() - new Date(b?.date).getTime(),
      defaultSortOrder: "descend",
    },
    {
      title: "Service",
      dataIndex: "service.name",
      key: "service",
      render: (_value, record) => <p>{record?.service?.name}</p>,
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
      key: "service.duration",
      dataIndex: "duration",
      render: (_value, record) => <p>{record?.service?.duration}min</p>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "isBooked",
      render: (value, record) =>
        value === "booked" ? (
          <p className="capitalize text-blue-500 font-semibold">{value}</p>
        ) : (
          <Select
            onChange={(value) => handleChange(record?._id, value)}
            options={[
              { value: "available", label: "Available" },
              { value: "canceled", label: "Canceled" },
            ]}
            defaultValue={value}
          >
            {value}
          </Select>
        ),
    },
  ];

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <>
      {isFetching ? (
        <Skeleton paragraph={{ rows: 10 }} />
      ) : (
        <div>
          {contextHolder}
          <h1 className="text-2xl font-semibold mb-4">Slot Management</h1>
          <div className="mb-4">
            <Search
              placeholder="Search for slots"
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
          <AddSlotModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
          <div className="mb-4">
            <Table<DataType>
              key={"_id"}
              columns={columns}
              dataSource={data?.data}
              pagination={false}
              loading={isFetching}
              scroll={{ x: true }}
              rowKey={(record) => record?._id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SlotManagement;

// const data: DataType[] = [
//   {
//     key: "1",
//     service: "Exterior Wash",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     duration: "60",
//     status: "available",
//   },
//   {
//     key: "2",
//     service: "Exterior Wash",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     duration: "60",
//     status: "canceled",
//   },
//   {
//     key: "3",
//     service: "Exterior Wash",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     duration: "60",
//     status: "available",
//   },
//   {
//     key: "4",
//     service: "Exterior Wash",
//     date: "2024-11-21",
//     startTime: "09:30",
//     endTime: "10:30",
//     duration: "60",
//     status: "available",
//   },
// ];
