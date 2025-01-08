import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import { CiSettings } from "react-icons/ci";
import { MdAvTimer, MdHome, MdOutlineDashboard } from "react-icons/md";
import { PiUsersFourThin } from "react-icons/pi";
import { RiMenuFold2Line } from "react-icons/ri";

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
  {
    key: "5",
    icon: <MdHome />,
    label: <NavLink to={"/"}>Back to Home</NavLink>,
  },
];

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className="p-4 align-middle">
          <Logo />
        </div>
      </Header>

      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" width={240} trigger={null}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>

        <Drawer placement="left" onClose={onClose} open={open} width={240}>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={onClose}
          />
        </Drawer>

        <Layout className="relative">
          <Button
            type="primary"
            onClick={showDrawer}
            className="block lg:hidden fixed bottom-4 left-2 z-50"
          >
            <RiMenuFold2Line />
          </Button>

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
    </Layout>
  );
};

export default AdminLayout;
