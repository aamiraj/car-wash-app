import React from "react";
import { Layout, Menu, theme } from "antd";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdOutlineDashboard />,
    label: <NavLink to={"/customer"}>Dashboard</NavLink>,
  },
  {
    key: "2",
    icon: <FaUserAlt />,
    label: <NavLink to={"/customer/account-info"}>Account-info</NavLink>,
  },
];

const CustomerLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" width={240}>
        <div className="p-4 align-middle hidden lg:block">
          <Logo />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="p-4 align-middle block lg:hidden">
            <Logo />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Car Wash Shop ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CustomerLayout;
