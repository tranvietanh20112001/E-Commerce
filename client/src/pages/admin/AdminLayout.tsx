import React, { useState } from "react";
import {
  ProductOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuItem[] = [
    {
      key: "0",
      label: "Dashboard",
      icon: <PieChartOutlined />,
      onClick: () => navigate("/admin/dashboard"),
    },
    {
      key: "1",
      label: "Products",
      icon: <ProductOutlined />,
      onClick: () => navigate("/admin/products"),
    },
    {
      key: "2",
      label: "Users",
      icon: <UserOutlined />,
      onClick: () => navigate("/admin/users"),
    },
    {
      key: "3",
      label: "Orders",
      icon: <TeamOutlined />,
      onClick: () => navigate("/admin/orders"),
    },
    {
      key: "4",
      label: "Home",
      icon: <HomeOutlined />,
      onClick: () => navigate("/"),
    },
  ];

  const parts = location.pathname.split("/");
  const finalBread = parts[2] ? capitalizeFirstLetter(parts[2]) : "";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["0"]}
          mode="inline"
          items={items}
        ></Menu>
      </Sider>
      <Layout
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Header
          style={{
            padding: "0 2.5%",
            background: colorBgContainer,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Breadcrumb
            items={[
              {
                title: <a>Home</a>,
                onClick: () => navigate("/"),
              },
              {
                title: <a>Admin</a>,
                onClick: () => navigate("/admin/dashboard"),
              },
              {
                title: <a>{finalBread}</a>,
              },
            ]}
          />
        </Header>
        <Content style={{ width: "95%" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          E-Commerce Admin Created by Viet Anh Tran
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
