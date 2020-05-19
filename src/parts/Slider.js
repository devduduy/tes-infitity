import React from "react";
import Slider_ from "react-slick";
import { Container, Card, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Slider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <Container style={{ height: 2000 }}>
        <Slider_ {...settings}>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1587145717011-b2c3349adf6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1587145820137-a9dbc8c5ed99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1587145820098-23e484e69816?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1568275339031-a8ce20ef6f9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ marginRight: 100 }}
                variant="top"
                src={`https://images.unsplash.com/photo-1534263326402-2bca76b7a48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}
              />
            </Card>
          </Col>
        </Slider_>
      </Container>
    );
  }
}

export default Slider;
