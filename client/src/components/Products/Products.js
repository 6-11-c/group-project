import React, { Component } from 'react';
import { Container, Row, Col, Button, FormText } from 'reactstrap';
import SearchBar from './SearchBar';



class Product extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <Container className="pt-5">
      <h2 className="row justify-content-center text-light">Our Epic Produce!</h2>
        <Row>
          <Col className="pt-2">
            <img className="img-fluid" src="Images/basil.jpg" alt="" />
            <FormText color="light">Fresh Basil</FormText>
            <FormText color="light">Price $9.99/lb</FormText>
            <Button color="light">Add to Order</Button>
          </Col>
          <Col className="pt-2">
            <img className="img-fluid" src="Images/apple.jpg" alt="" />
            <FormText color="light">Apples</FormText>
            <FormText color="light">Price $4.99/lb</FormText>
            <Button color="light">Add to Order</Button>
          </Col>
          <Col className="pt-2">
            <img className="img-fluid" src="Images/avocado2.jpg" alt="" />
            <FormText color="light">Hass Avocados</FormText>
            <FormText color="light">Price $1.99/each</FormText>
            <Button color="light">Add to Order</Button>
          </Col>
          <Col className="pt-2">
            <img className="img-fluid" src="Images/banana.jpg" alt="" />
            <FormText color="light">Bananas</FormText>
            <FormText color="light">Price $6.99/bunch</FormText>
            <Button color="light">Add to Order</Button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
export default Product;