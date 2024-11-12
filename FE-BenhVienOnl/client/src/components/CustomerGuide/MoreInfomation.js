import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const formatTitleForURL = (title) =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

const CheckupCard = ({ imgSrc, title, description }) => (
  <Col
    style={{
      flexBasis: "30%",
      flexGrow: 1,
      backgroundColor: "#cecece26",
      padding: "10px",
      margin: "10px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
    xs={24}
    sm={12}
    md={8}
    lg={7}
    xl={6}
  >
    <Link
      to={`/thong-tin-tham-khao/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
    >
      <img
        src={imgSrc}
        alt="img"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          objectPosition: "bottom",
          borderRadius: "10px",
        }}
      />
    </Link>
    <Link
      to={`/thong-tin-tham-khao/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
    >
      <h4
        className="text-lg font-bold text-blue-900"
        style={{ padding: "25px 0px" }}
      >
        {title}
      </h4>
    </Link>
    <p style={{ textAlign: "justify" }}>{description}</p>
  </Col>
);

const MoreInformation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const checkupCardsData = [
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/821/danh-sach-van-bang-chuyen-mon-ph%E1%BA%A1m-vi-hoat-dong.png",
      title: "DANH SÁCH VĂN BẰNG CHUYÊN MÔN VÀ PHẠM VI HOẠT ĐỘNG",
      description:
        "Danh sách văn bằng chuyên môn và phạm vi hoạt động của đội ngũ Bác sĩ của Phòng khám Bệnh viện Đại học Y Dược 1",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/820/danh-muc-ky-thuat.png",
      title: "DANH MỤC KỸ THUẬT",
      description:
        "Phòng khám Bệnh viện Đại học Y Dược 1 được phê duyệt danh mục kỹ thuật trong khám chữa bệnh theo quyết định số 467/QĐ-SYT ngày 26 tháng 5 năm 2020 của Sở Y tế. Phòng khám đa khoa Bệnh viện Đại học Y Dược 1 do TS,BS, Nguyễn Thị Thanh Thủy chịu trách nhiệm chuyên môn tại địa chỉ 20-22 Dương Quang Trung, Phường 12, Quận 10",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/819/gia-dich-vu-kham-chua-benh.png",
      title: "BẢNG GIÁ DỊCH VỤ KHÁM CHỮA BỆNH VÀ VẬT TƯ Y TẾ",
      description:
        "Phòng khám Bệnh viện Đại Học Y Dược 1 trân trọng kính gửi đến Quý khách hàng bảng giá một số dịch vụ y tế ",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/786/luat-kham-benh-chua-benh.jpg",
      title: "LUẬT KHÁM CHỮA BỆNH 2023 (15.2023.QH15)",
      description:
        "Ngày 09/01/2023, Quốc Hội Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XV, trong kỳ họp bất thường lần thứ 2 đã thông qua Luật Khám bệnh, chữa bệnh.",
    },
    {
      imgSrc: "",
      title: "",
      description: "",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = checkupCardsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px",
        }}
      >
        <h2 className="text-2xl font-bold text-blue-900">
          THÔNG TIN THAM KHẢO
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#a3d1ef",
                margin: "0 10px",
              }}
            ></span>
            <span style={{ fontSize: "1.5rem", color: "#73c2ec" }}>✦</span>
            <span
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#a3d1ef",
                margin: "0 10px",
              }}
            ></span>
          </div>
        </h2>
      </Row>

      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px 10%",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Col xs={24} sm={24} md={10}>
          <Link
            to={`/thong-tin-tham-khao/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={checkupCardsData[0].imgSrc}
              alt={checkupCardsData[0].title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} style={{ textAlign: "justify" }}>
          <Link
            to={`/thong-tin-tham-khao/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <h4
              className="text-xl font-bold text-blue-900"
              style={{ marginBottom: "15px" }}
            >
              {checkupCardsData[0].title}
            </h4>
          </Link>
          <p style={{ marginBottom: "20px" }}>
            {checkupCardsData[0].description}
          </p>
          <Link
            to={`/thong-tin-tham-khao/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <button className="btn btn-outline-primary">Xem chi tiết</button>
          </Link>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {currentData.slice(1).map((card) => (
          <CheckupCard
            key={card.title}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </Row>

      <Row justify="center" style={{ marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          total={checkupCardsData.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Row>

      <FooterComponent />
    </div>
  );
};

export default MoreInformation;
