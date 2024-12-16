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
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedSlot } from "../../redux/features/slot/slotSlice";
import { serviceImgs } from "../../constants";

interface DataType {
  _id: string;
  startTime: string;
  endTime: string;
  isBooked: string;
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
    dataIndex: "isBooked",
    key: "isBooked",
    render: (value) => {
      return (
        <span
          className={`capitalize ${
            value === "available" ? "text-lime-500" : "text-red-500"
          }`}
        >
          {value}
        </span>
      );
    },
  },
];

const DetailsService = () => {
  const [slotsData, setSlotsData] = useState<DataType[]>([]);
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const defaultDate = dayjs("2024-06-17");
  const [date, setDate] = useState(defaultDate);
  const dispatch = useAppDispatch();
  const { slot } = useAppSelector((state) => state.slot);

  const { data: serviceData, isFetching: serviceFetching } =
    useGetAServiceQuery(serviceId);
  const {
    data: slotsObjectData,
    isFetching: slotsFetching,
    isError,
  } = useGetSlotsOfServiceQuery({
    serviceId: serviceId as string,
    date: date.format("YYYY-MM-DD"),
  });

  useEffect(() => {
    !slotsFetching && setSlotsData(slotsObjectData?.data);
    isError && setSlotsData([]);
  }, [slotsFetching, isError]);

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      const selectedSlot = {
        slotId: selectedRows[0]._id,
        serviceId: serviceId as string,
        startTime: selectedRows[0].startTime,
        endTime: selectedRows[0].endTime,
        date: date.format("YYYY-MM-DD"),
      };

      dispatch(setSelectedSlot(selectedSlot));
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.isBooked === "booked",
      name: record.isBooked,
    }),
  };

  const onChange: DatePickerProps["onChange"] = (_, dateStr) => {
    const selectedDate = dayjs(dateStr as string);
    setDate(selectedDate);
  };

  return (
    <div className="wrapper">
      <Row gutter={[32, 16]}>
        <Col span={24} md={{ span: 12 }}>
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

          <div>
            <Table
              rowSelection={{ type: "radio", ...rowSelection }}
              columns={columns}
              dataSource={slotsData}
              pagination={false}
              loading={slotsFetching}
              rowKey={(record) => record?._id}
            />
          </div>

          <Divider />
          <Button
            onClick={() => navigate(`/booking/${serviceId}`)}
            type="default"
            htmlType="button"
            className="pill-btn"
            disabled={!slotsData?.length || !slot}
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
