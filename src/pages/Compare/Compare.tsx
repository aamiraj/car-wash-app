import { Col, Flex, Row, Select, Skeleton, Typography } from "antd";
import { useState } from "react";
import {
  useGetAllServicesQuery,
  useGetAServiceQuery,
} from "../../redux/api/serviceApi";

const Compare = () => {
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");

  const { data: servicesData, isFetching } = useGetAllServicesQuery({
    searchTerm: "",
    sort: "",
  });

  const { data: serviceData1, isFetching: isService1Fetching } =
    useGetAServiceQuery(service1, {
      skip: !service1,
    });

  const { data: serviceData2, isFetching: isService2Fetching } =
    useGetAServiceQuery(service2, {
      skip: !service2,
    });

  return (
    <div>
      <Typography.Title level={3}>
        Compare between two services, make the best decision
      </Typography.Title>
      <Row>
        <Col span={24} lg={{span: 12}}>
          <Flex gap={"small"} align="center" className="mb-4">
            <p className="text-sm">Service 1: </p>
            <Select
              style={{ width: 200 }}
              placeholder={"Please select a service"}
              options={servicesData?.data?.map((item: any) => ({
                value: item?._id,
                label: item?.name,
              }))}
              loading={isFetching}
              onChange={(value) => setService1(value)}
            />
          </Flex>
          <div>
            {isService1Fetching ? (
              <Skeleton />
            ) : (
              <div className="text-lg m-4">
                <p className="mb-2">
                  <span className="text-gray-500">Service Name: </span>
                  <span className="font-semibold">
                    {serviceData1?.data?.name}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="text-gray-500">Price: </span>
                  <span className="font-semibold">
                    ${serviceData1?.data?.price}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="text-gray-500">Duration: </span>
                  <span className="font-semibold">
                    {serviceData1?.data?.duration}min
                  </span>
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col span={24} lg={{span: 12}}>
          <Flex gap={"small"} align="center" className="mb-4">
            <p className="text-sm">Service 2: </p>
            <Select
              style={{ width: 200 }}
              placeholder={"Please select a service"}
              options={servicesData?.data?.map((item: any) => ({
                value: item?._id,
                label: item?.name,
              }))}
              loading={isFetching}
              onChange={(value) => setService2(value)}
            />
          </Flex>
          <div>
            {isService2Fetching ? (
              <Skeleton />
            ) : (
              <div className="text-lg m-4">
                <p className="mb-2">
                  <span className="text-gray-500">Service Name: </span>
                  <span className="font-semibold">
                    {serviceData2?.data?.name}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="text-gray-500">Price: </span>
                  <span className="font-semibold">
                    ${serviceData2?.data?.price}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="text-gray-500">Duration: </span>
                  <span className="font-semibold">
                    {serviceData2?.data?.duration}min
                  </span>
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Compare;
