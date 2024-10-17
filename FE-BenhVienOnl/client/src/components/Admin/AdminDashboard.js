import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import logo from "../../img/logo192.png";
import UserMenu from "../Header/UserMenu";

const { Sider, Content } = Layout;

const AdminDashboard = () => {
  // Cấu hình các items cho Menu theo format mới của Ant Design
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="/adminDashboard">Bảng Điều Khiển</Link>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <Link to="/adminDashboard/user">Quản Lý Người Dùng</Link>,
    },
    {
      key: "3",
      icon: <VideoCameraOutlined />,
      label: <Link to="/adminDashboard/doctor">Quản Lý Bác Sĩ</Link>,
    },
    {
      key: "4",
      icon: <UploadOutlined />,
      label: "Quản Lý Ca Khám Bệnh",
    },
    {
      key: "5",
      icon: <UploadOutlined />,
      label: <Link to="/adminDashboard/department">Quản Lý Chuyên Khoa</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider trigger={null} collapsible className="bg-white" width={250}>
        <div className="logo p-4 text-center">
          <img src={logo} alt="logo" className="h-12 mx-auto" />
        </div>
        {/* Menu sử dụng items thay vì children */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems} // Sử dụng items từ mảng menuItems
        />
      </Sider>

      {/* Main content */}
      <Layout className="site-layout">
        <UserMenu /> {/* Menu người dùng trên header */}

        <Content className="p-8 bg-gray-100">
          {/* Phần nội dung sẽ thay đổi tại đây dựa vào các Route con */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
