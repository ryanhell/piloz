import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

import moc from "@images/ryanhell2.png";

import { CALL_TO_ACTION_DATA } from "@data/index";

const CallToAction = () => {
  const { sectionTitle, paragraph, posts, button } = CALL_TO_ACTION_DATA;
  return (
    <section className="cta-one">
      
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div
              className="cat_one_moc wow fadeInUp"
              data-wow-duration="1500ms"
            >
              
              <img src={moc} alt="Cat-1-Moc-1 Image" />
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="cat_one_content">
              <div className="block-title">
                <p>{sectionTitle.text}</p>
                <h3>{sectionTitle.title}</h3>
              </div>
              <div className="cat_one_icon-wrap">
                {posts.map(({ icon, title, extraClassName }, index) => (
                  <div
                    className="cta-one__icon-single"
                    key={`cta-one-key-${index}`}
                  >
                    <div className="cta-one__icon">
                      <i className={`${icon} ${extraClassName}`}></i>
                    </div>
                    <h3>{title}</h3>
                  </div>
                ))}
              </div>
              <div className="cta-one__text">
                <p>{paragraph}</p>
              </div>
              <Link href={button.link}>
                <a className="thm-btn cta-one__btn">
                  <span>{button.label}</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
