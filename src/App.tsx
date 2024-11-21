import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: "#FFFFFF",
          }
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

export default App;
