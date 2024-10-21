import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navigation = () => {
  // Lấy thông tin userInfo từ Redux store
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      className="navigation-menu"
    >
      {/* Trang Chủ */}
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <a href="/">Trang Chủ</a>
      </Menu.Item>

      {/* Dịch Vụ */}
      <SubMenu key="services" icon={<SettingOutlined />} title="Dịch Vụ">
        <Menu.Item key="2-1">
          <a href="/services/consultation">Tư Vấn</a>
        </Menu.Item>
        <Menu.Item key="2-2">
          <a href="/services/training">Đào Tạo</a>
        </Menu.Item>
        <Menu.Item key="2-3">
          <a href="/services/support">Hỗ Trợ</a>
        </Menu.Item>
      </SubMenu>

      {/* Sản Phẩm */}
      <SubMenu key="products" icon={<AppstoreOutlined />} title="Sản Phẩm">
        <Menu.Item key="3-1">
          <a href="/products/software">Phần Mềm</a>
        </Menu.Item>
        <Menu.Item key="3-2">
          <a href="/products/hardware">Phần Cứng</a>
        </Menu.Item>
        <Menu.Item key="3-3">
          <a href="/products/accessories">Phụ Kiện</a>
        </Menu.Item>
      </SubMenu>

      {/* Liên Hệ */}
      <Menu.Item key="4" icon={<MailOutlined />}>
        <a href="/contact">Liên Hệ</a>
      </Menu.Item>

      {/* Menu cho Admin */}
      {userInfo && userInfo.role === "admin" && (
        <Menu.Item key="6" icon={<UserOutlined />}>
          <a href="/adminDashboard">Quản lý Hệ thống</a>
        </Menu.Item>
      )}

      {userInfo && userInfo.role === "doctor" && (
        <Menu.Item key="6" icon={<UserOutlined />}>
          <a href="/doctorDashboard">Dành Cho Bác Sĩ</a>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navigation;
