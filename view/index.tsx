import React, { Fragment } from "react";
import { Row, Col } from "antd";
import CardInfo from "./information";
import PricingAndPromotion from "./pricing-and-promotion";
import CardLastRead from "./last-read";
import About from "./about";
import RelatedTitles from "./related";
import Comments from "./comment";
import QrCode from "./get-app";

const MainView: React.FC = () => {
  return (
    <Row gutter={[25, 16]} className="container">
      {/* Left */}
      <Col md={15} lg={15} xl={15}>
        <CardInfo />
        {/* pricing_promotion */}
        <PricingAndPromotion />
        {/* Last read */}
        <CardLastRead />
      </Col>
      {/* Right */}
      <Col md={9} lg={8} xl={8}>
        {/* About */}
        <About />
        {/* Related Titles */}
        <RelatedTitles />
        {/* Comment */}
        <Comments />
        {/* QR Code */}
        <QrCode />
      </Col>
    </Row>
  );
};
export default MainView;
