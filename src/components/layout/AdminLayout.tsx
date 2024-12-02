import React from "react";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import { CiSettings } from "react-icons/ci";
import { MdAvTimer, MdOutlineDashboard } from "react-icons/md";
import { PiUsersFourThin } from "react-icons/pi";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdOutlineDashboard />,
    label: <NavLink to={"/admin"}>Dashboard</NavLink>,
  },
  {
    key: "2",
    icon: <CiSettings />,
    label: (
      <NavLink to={"/admin/service-management"}>Service Management</NavLink>
    ),
  },
  {
    key: "3",
    icon: <MdAvTimer />,
    label: <NavLink to={"/admin/slot-management"}>Slot Management</NavLink>,
  },
  {
    key: "4",
    icon: <PiUsersFourThin />,
    label: <NavLink to={"/admin/users-management"}>User Management</NavLink>,
  },
];

const AdminLayout: React.FC = () => {
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
              minHeight: "100vh",
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

export default AdminLayout;
