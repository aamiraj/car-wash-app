import { Button, Dropdown, MenuProps, Space } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logOutUser } from "../../redux/features/auth/authSlice";

const AppDropDown = ({ userLink }: { userLink: string }) => {
  const dispatch = useAppDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to={userLink}>Profile</Link>,
    },
    {
      key: "3",
      label: (
        <Button
          type="primary"
          htmlType="button"
          onClick={() => dispatch(logOutUser())}
        >
          Log Out
        </Button>
      ),
    },
    //   {
    //     key: "4",
    //     label: "Settings",
    //     icon: <CiSettings />,
    //   },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button type="default" htmlType="button" className="pill-btn">
        <Space>
          <FaUserCircle />
          <FaAngleDown />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default AppDropDown;
