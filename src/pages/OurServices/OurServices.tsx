import { Col, Flex, GetProps, Row, Select, Skeleton } from "antd";
import ServiceCard from "../../components/ui/ServiceCard";
import { useGetAllServicesQuery } from "../../redux/api/serviceApi";
import { Input } from "antd";
import { useState } from "react";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const OurServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");

  const { data, isLoading } = useGetAllServicesQuery({
    searchTerm: searchTerm,
    sort: sort,
  });

  const onSearch: SearchProps["onSearch"] = (value, _e, _info) => {
    setSearchTerm(value);
  };

  const handleChange = (value: string) => {
    setSort(value);
  };

  return (
    <div className="wrapper">
      <h1 className="header1">Our Services</h1>
      <h2 className="header2">You can filter and sort these services</h2>
      <div className="flex items-center justify-center">
        <Flex
          align="center"
          justify="center"
          vertical
          gap={"small"}
          className="my-4 w-full max-w-[300px]"
        >
          <Search
            placeholder="Input search text"
            onSearch={onSearch}
            enterButton
          />
          <Select
            placeholder="Sort by"
            defaultValue="name"
            style={{ width: "100%", maxWidth: 300 }}
            onChange={handleChange}
            options={[
              { value: "-name", label: "Name(ascending)" },
              { value: "name", label: "Name(descending)" },
              { value: "price", label: "Price(Low to high)" },
              { value: "-price", label: "Price(High to low)" },
              { value: "duration", label: "Duration(Low to high)" },
              { value: "-duration", label: "Duration(High to low)" },
            ]}
          />
        </Flex>
      </div>
      <div className="py-8">
        <Row gutter={[32, 32]}>
          {isLoading
            ? [1, 2, 3, 4].map((_item, idx) => (
                <Col
                  key={idx}
                  span={24}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
                </Col>
              ))
            : data?.data?.map((item: any, idx: number) => (
                <Col
                  key={idx}
                  span={24}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <ServiceCard key={idx} idx={idx} data={item} />
                </Col>
              ))}
        </Row>
      </div>
    </div>
  );
};

export default OurServices;

// import Service1 from "../../assets/service-1.jpg";

// const services = [
//   {
//     _id: "1",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },

//   {
//     _id: "2",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
//   {
//     _id: "3",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
//   {
//     _id: "4",
//     img: Service1,
//     name: "Exterior Cleaning",
//     duration: 60,
//     price: 50,
//     description:
//       "Our most popular service, for vehicles that require a little extra attention. An exterior wash that leaves the car gleaming, with cleaning throughout the interior.",
//   },
// ];
