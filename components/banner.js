import React from "react";
import Link from 'next/link'
import { Row, Col, Container } from "react-bootstrap";
import bgShape2 from "@images/swissArmy.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import bannerShape1 from "@images/shapes/banner-1-1.png";
import bannerShape2 from "@images/banner/banner-shape-1-4.png";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner-one__content">
              <h3>
                Ryan Hell
                <br />
              </h3>
              <p>
                Tradesman, engineer, analyst.{" "}
                <br />
                Located in Lancaster, PA
              </p>
              <a href="tel:267-777-2344" className="thm-btn">
                <span>Call</span>
              </a>
              <a href="mailto: ryanbrooklyn2020@gmail.com" className="thm-btn">
                <span>Call</span>
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <img src={bannerShape1} className="banner-image__curvs" alt="" />
              <div>
              <img src={bgShape2} alt="Banner-Shape-2" className="banner-shape-2"  />
              </div>
              
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
