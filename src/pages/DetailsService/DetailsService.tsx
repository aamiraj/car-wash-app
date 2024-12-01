import {
  Col,
  Divider,
  Image,
  Row,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import ServiceImg from "../../assets/service-1.jpg";
import { FaClock, FaDollarSign } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

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

const data: DataType[] = [
  {
    key: "1",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
  {
    key: "2",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
  {
    key: "3",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
  {
    key: "4",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
  {
    key: "5",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
  {
    key: "6",
    startTime: "09:30",
    endTime: "10:30",
    availablity: "Available",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const DetailsService = () => {
  const { serviceId } = useParams();

  return (
    <div className="wrapper">
      <Row gutter={[32, 16]}>
        <Col span={24} md={{ span: 12 }}>
          <Image
            preview={false}
            src={ServiceImg}
            alt="service"
            className="rounded-lg"
          />
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            About Exterior Cleaning
          </h1>
          <div className="mb-4">
            <p className="text-lg flex items-center gap-1">
              <FaClock />
              Duration: 60min
            </p>
            <p color="purple" className="text-lg flex items-center gap-1">
              <FaDollarSign />
              Price: 100$
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Description
            </h3>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
              <br />
              <br />
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </Col>
        <Col span={24} md={{ span: 12 }}>
          <h3 className="text-lg font-semibold md:text-2xl mb-4">Slots</h3>
          Date: <Tag className="mb-4">2024-11-07</Tag>
          <div>
            <Table<DataType>
              rowSelection={{ type: "radio", ...rowSelection }}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
          <Divider />
          <Link to={`/booking/${serviceId}`} className="pill-btn">
            Book This Service
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default DetailsService;
