import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";

function MyApp() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: "#FFFFFF",
          },
          Typography: {
            fontSize: 16,
          },
        },
        token: {
          // Seed Token
          colorPrimary: "#008DDA",
        },
      }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default MyApp;
