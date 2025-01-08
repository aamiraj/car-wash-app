import {
  Button,
  Col,
  Drawer,
  Flex,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import Logo from "../ui/Logo";
import {
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import decodeJwtToken from "../../utils/decodeJwtToken";
import AppDropDown from "../ui/AppDropDown";
import { useState } from "react";

const { Title, Paragraph } = Typography;

const { Header, Content, Footer } = Layout;

const navLinkStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
};

const topHeaderContentStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

const items = [
  {
    key: 1,
    label: "Home",
    link: "/",
  },
  {
    key: 2,
    label: "Services",
    link: "/services",
  },
  {
    key: 3,
    label: "Compare",
    link: "/compare",
  },
  // {
  //   key: 4,
  //   label: "About Us",
  //   link: "/about-us",
  // },
];

const MainLayout = () => {
  const auth = useAppSelector((state) => state.auth);

  let user;
  let userLink = "";
  if (auth?.token) {
    user = decodeJwtToken(auth?.token);

    user?.role === "admin" ? (userLink = "/admin") : (userLink = "/customer");
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header className="hidden md:block text-[#F7EEDD] bg-[#222222]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div style={topHeaderContentStyle}>
              <FaPhone />
              <p>+8801XXXXXXXXX</p>
            </div>
            <div style={topHeaderContentStyle}>
              <FaEnvelope />
              <p>car-wash@service.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </Header>
      <Header className="relative bg-gray-200/50 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="hidden md:block">
          <Space size={"large"} align="center">
            {items.map((item) => (
              <NavLink
                key={item.key}
                to={item.link}
                style={navLinkStyle}
                className={"nav-link"}
              >
                {item.label}
              </NavLink>
            ))}
          </Space>
        </div>
        <div className="hidden md:block">
          {auth?.user ? (
            <AppDropDown userLink={userLink} />
          ) : (
            <Space wrap>
              <Link to="/log-in" className="pill-btn">
                LOG IN
              </Link>
              <Link to="/sign-up" className="pill-btn-sign-up">
                SIGN UP
              </Link>
            </Space>
          )}
        </div>
        {/* on mobile device  */}
        <div className="block md:hidden">
          <Button type="default" htmlType="button" onClick={showDrawer}>
            <FaBars className="text-xl" />
          </Button>
        </div>
      </Header>
      <Content className="p-8 lg:py-6 lg:px-12">
        <Drawer open={open} onClose={onClose} placement="right" width={240}>
          <Flex vertical gap={"large"} align="flex-start">
            {items.map((item) => (
              <NavLink key={item.key} to={item.link} style={navLinkStyle}>
                {item.label}
              </NavLink>
            ))}
            {auth?.user ? (
              <AppDropDown userLink={userLink} />
            ) : (
              <Link to="/log-in" className="pill-btn">
                LOG IN
              </Link>
            )}
          </Flex>
        </Drawer>
        <Outlet />
      </Content>
      <Footer>
        <Row gutter={[32, 16]}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Logo />
            <Paragraph className="text-justify">
              Car wash provides a professional service which is grooming and
              maintaining cleanliness of your car. We are determined to give you
              the best service in town.
            </Paragraph>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Quick Links</Title>
            <Space align="start" direction="vertical">
              <Link to={"/"} className="link">
                Home
              </Link>
              <Link to={"/services"} className="link">
                Services
              </Link>
              <Link to={"/sign-up"} className="link">
                Create an account
              </Link>
              <Link to={"/reviews"} className="link">
                Reviews
              </Link>
            </Space>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Social Links</Title>
            <Space align="start" direction="vertical">
              <Link to={"https://www.facebook.com"} className="link">
                Facebook
              </Link>
              <Link to={"https://www.twitter.com"} className="link">
                Twitter
              </Link>
              <Link to={"https://www.youtube.com"} className="link">
                Youtube
              </Link>
            </Space>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Address</Title>
            <address className="max-w-[300px]">
              495 North Highland Hwy, Suite 475, Trenton, NJ, 01907
            </address>
            <p>+8801XXXXXXXXX</p>
            <p>car-wash@service.com</p>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
