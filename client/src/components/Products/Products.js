import React, { Component } from "react";
import { Container, Row, Col, Button, FormText } from "reactstrap";
import SearchBar from "./SearchBar";
import axios from "axios";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/products")
      .then(results => {
        const product = results.data;
        console.log('products', product);
        this.setState({ products: product.products });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log('products', this.state.products);
    return (
      <div>
        <SearchBar />
        {/* <Container className="pt-5">
          <h2 className="row justify-content-center text-light">
            Our Epic Produce!
          </h2>
          {(this.state) ? this.state.products.map((product, index) => (
            <Row key={index}>
              <Col className="pt-2">
                <img className="img-fluid" src={product.productImage} alt="" />
                <FormText color="light">{product.name}</FormText>
                <FormText color="light">{product.price}</FormText>
                <Button color="light">Add to Order</Button>
              </Col>
            </Row>
          )) : null}
        </Container> */}
      </div>
    );
  }
}
export default Product;
