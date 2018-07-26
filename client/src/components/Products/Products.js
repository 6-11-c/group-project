import React, { Component } from 'react';
import { Container, Row, Col, Button, FormText } from 'reactstrap';
import SearchBar from './SearchBar';
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    axios.get('https://staging-agile-springs-53811.herokuapp.com/products').then((results, err) => {
      const product = results.data;
      console.log(product);
      this.setState({ results });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
        <SearchBar />
        <Container className="pt-5">
          <h2 className="row justify-content-center text-light">Our Epic Produce!</h2>
          {this.state.products.map(product =>
            <Row>
              <Col key={product._id} className="pt-2">
                <img className="img-fluid" src={product.productImage} alt="" />
                <FormText color="light">{product.name}</FormText>
                <FormText color="light">{product.price}</FormText>
                <Button color="light">Add to Order</Button>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}
export default Product;