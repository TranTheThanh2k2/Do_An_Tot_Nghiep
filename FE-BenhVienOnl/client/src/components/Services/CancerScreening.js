import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

// Helper function to format title for URL
const formatTitleForURL = (title) =>
  title
    .normalize("NFD") // Normalize to split characters and their diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove any special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
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
      to={`/tam-soat-ung-thu/${formatTitleForURL(title)}`}
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
      to={`/tam-soat-ung-thu/${formatTitleForURL(title)}`}
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

const CancerScreening = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/221/goi-tam-soat-ung-thu-tong-quat.jpg",
      title: "GÓI KHÁM TẦM SOÁT UNG THƯ TỔNG QUÁT",
      description:
        "Gói khám tầm soát ung thư tổng quát của Phòng khám Bệnh viện Đại học Y Dược 1 được đội ngũ chuyên môn xây dựng theo nguyên tắc: Khoa học, hiệu quả, có tính thực tiễn cao, tiết kiệm chi phí cho khách hàng. Khi thực hiện gói khám này khách hàng có thể linh hoạt lựa chọn thêm các dịch vụ khác tại Phòng khám",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/547/goi-kham-tam-soat-ung-thu-vom-hong.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ VÒM HỌNG",
      description:
        "Tầm soát ung thư vòm họng (vòm hầu) cần được thực hiện định kỳ ngay cả khi chưa có triệu chứng nào để kiểm soát các nguy cơ có thể xảy ra, vì đây là một căn bệnh có triệu chứng âm thầm và khả năng di căn xa.",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/446/goi-tam-soat-ung-thu-co-tu-cung.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ CỔ TỬ CUNG",
      description:
        "Tầm soát ung thư cổ tử cung là cách hiệu quả nhất để phát hiện và ngăn chặn ung thư cổ tử cung, căn bệnh gây tử vong hàng đầu trong các loại ung thư ở phụ nữ. ",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/222/p_400x600.jpg",
      title: "GÓI KHÁM TẦM SOÁT UNG THƯ PHỔI",
      description:
        "Tầm soát ung thư phổi là phương pháp phát hiện dấu hiệu ung thư ngay cả khi chưa có các triệu chứng rõ ràng giúp người bệnh phát hiện bệnh sớm, điều trị và chăm sóc sức khỏe kịp thời, giảm đau đớn, tăng khả năng khỏi bệnh, ngăn chặn di căn và các biến chứng nguy hiểm khác.",
    },
  ];

  // Calculate the start and end indices for slicing the array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display only the current page items
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
          TẦM SOÁT UNG THƯ
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

      {/* First full-width card */} 
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
            to={`/tam-soat-ung-thu/${formatTitleForURL(
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
            to={`/tam-soat-ung-thu/${formatTitleForURL(
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
          <p style={{ marginBottom: "20px" }}>{checkupCardsData[0].description}</p>
          <Link
            to={`/tam-soat-ung-thu/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <button className="btn btn-outline-primary">Xem chi tiết</button>
          </Link>
        </Col>
      </Row>

      {/* Remaining items in rows of 3 */}
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

      {/* Pagination Component */}
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

export default CancerScreening;
