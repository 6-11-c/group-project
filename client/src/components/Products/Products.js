import React, { Component } from "react";
import { Container, Row, Col, Button, FormText, Input, InputGroup, InputGroupAddon } from "reactstrap";
import SearchBar from "./SearchBar";
import axios from "axios";
import CartStyles from '../../styles/CartStyles';
import ImageStyles from '../../styles/ImageStyles';
import MediaQuery from 'react-responsive';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  
  incrementItem = (item) => {
    let authToken = window.localStorage.auth_token;
    let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    item.id = payload.userId;
    axios.post("/cart", item).then(() => {
      window.location.href = '/cart';
    })
  }

  componentDidMount = () => {
    axios
      .get("/api/products/products")
      .then(results => {
        const product = results.data;
        this.setState({ products: product.products });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>

        {/* Desktop Responsiveness */}
        <MediaQuery query={'(min-device-width: 500px)'}>
        <SearchBar />
        <Container className="pt-5">
          <h2 className="row justify-content-center text-light">
            Our Epic Produce!
          </h2>
          {(this.state.products) ? this.state.products.map((product, index) => (
            <Row key={index}>
              <Col className="pt-2">
                <img className="img-fluid" style={ImageStyles.appImages} src={product.productImage} alt="" />
                <FormText color="light"><h4>{product.name}</h4></FormText>
                <FormText color="light"><h5>${product.price}.00</h5></FormText>
                <Button color="secondary" className="ml-2" onClick={() => this.incrementItem(product)}>Add to Order</Button>
              </Col>
            </Row>
          )) : null}
        </Container>
        </MediaQuery>

      </div>
    );
  }
}
export default Product;
