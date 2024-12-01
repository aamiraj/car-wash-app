import { Col, Layout, Row, Space, Typography } from "antd";
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

const { Title, Paragraph } = Typography;

const { Header, Content, Footer } = Layout;

const navLinkStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
};

const contentStyle: React.CSSProperties = {
  padding: "24px 50px",
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
    label: "Bookings",
    link: "/bookings",
  },
  {
    key: 4,
    label: "About Us",
    link: "/about-us",
  },
];

const MainLayout = () => {
  const toggleMobileNavLinks = (id: string) => {
    const menuNavLinks = document.getElementById(id) as HTMLElement;

    if (menuNavLinks.style.display === "none") {
      menuNavLinks.style.display = "block";
      menuNavLinks.style.width = "200px";
    } else {
      menuNavLinks.style.display = "none";
      menuNavLinks.style.width = "0px";
    }
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
          <Link to="/log-in" className="pill-btn">
            LOG IN
          </Link>
        </div>
        {/* on mobile device  */}
        <div className="block md:hidden">
          <button
            type="button"
            onClick={() => toggleMobileNavLinks("menuNavLinks")}
          >
            <FaBars className="text-xl" />
          </button>
          <div
            id="menuNavLinks"
            style={{ display: "none", width: "0px" }}
            className="h-full overflow-x-hidden fixed top-0 right-0 bg-gray-200 transition-[width]  duration-500 z-10"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 -mt-2">
                <button
                  type="button"
                  className="text-4xl "
                  onClick={() => toggleMobileNavLinks("menuNavLinks")}
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="p-6">
              <Space size={"small"} align="start" direction="vertical">
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
                <Link to="/log-in" className="pill-btn">
                  LOG IN
                </Link>
              </Space>
            </div>
          </div>
        </div>
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer>
        <Row gutter={[32,16]}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Logo />
            <Paragraph className="text-justify">
              Car wash provides a professional service which is grooming and
              maintaining cleanliness of your car. We are determined to give you
              the best service in town.
            </Paragraph>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Important Link</Title>
            <Space align="start" direction="vertical">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>Bookings</Link>
              <Link to={"/"}>Reviews</Link>
            </Space>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Quick Link</Title>
            <Space align="start" direction="vertical">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>Bookings</Link>
              <Link to={"/"}>Reviews</Link>
            </Space>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <Title level={4}>Address</Title>
            <address className="max-w-[300px]">
              495 North Highland Hwy, Suite 475, Trenton, NJ, 01907
            </address>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
