import React from "react";
import Link from 'next/link'
import { Row, Col, Container } from "react-bootstrap";
import bgShape2 from "@images/swissArmy.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import bannerShape1 from "@images/shapes/banner-1-1.png";
import bannerShape2 from "@images/banner/banner-shape-1-4.png";
import Connect from "@components/connect";
const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={5} lg={5}>
            <div className="banner-one__content">
              <h3>
                Ryan Hell
                <br />
              </h3>
              <p>
                Tradesman. Engineer, Analyst.{" "}
                <br />
                Located in Lancaster, PA
              </p>
              <a href="tel:267-777-2344" className="thm-btn">
                <span><i className="fas fa-headset fa-2x thm-btn-span2">  CALL</i></span>
              </a>
              <a href="mailto: ryanbrooklyn2020@gmail.com" className="thm-btn mx-1">
               <span><i className="fas fa-keyboard fa-2x thm-btn-span2">   MAIL</i></span>
              </a>
            </div>
          </Col>
          <Col xl={7} lg={7}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <img src={bannerShape1} className="banner-image__curvs" alt="" />
              <Connect />             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
