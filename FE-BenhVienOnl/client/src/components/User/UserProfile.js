// src/components/User/UserProfile.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

// Import các icon từ react-icons
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaComments,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";

const UserProfile = () => {
  const menuItems = [
    { name: "Thông tin cá nhân", path: "/user/profile", icon: <FaUser /> },
    {
      name: "Lịch khám của tôi",
      path: "/profile/orders",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Hồ sơ bệnh án",
      path: "/profile/medical-record",
      icon: <FaFileMedical />,
    },
    { name: "Nhận xét", path: "/profile/reviews", icon: <FaComments /> },
    {
      name: "Quản lý thẻ",
      path: "/profile/manage-card",
      icon: <FaCreditCard />,
    },
    { name: "Đăng xuất", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div>
      <HeaderComponent />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Thông tin tài khoản</h3>
          <ul style={styles.sidebarList}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} style={styles.sidebarLink}>
                  {item.icon} <span style={styles.linkText}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

// Style CSS
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff", // Đổi nền thành màu trắng
    padding: "20px",
    color: "#000", // Đổi chữ thành màu đen
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Đổ bóng nhẹ cho sidebar
    borderRadius: "8px", // Bo góc nhẹ
  },
  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000", // Đổi chữ thành màu đen
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  sidebarLink: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    color: "#000", // Đổi chữ thành màu đen
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  sidebarLinkHover: {
    color: "#007bff", // Màu xanh cho hover
  },
  linkText: {
    marginLeft: "10px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    margin: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
};

export default UserProfile;
