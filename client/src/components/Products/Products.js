import React, { Component } from "react";
import { Row, Col, Button, FormText, Card, CardBody} from "reactstrap";
// import SearchBar from "./SearchBar"; <--Stretch Goal-->
import axios from "axios";
import ImageStyles from '../../styles/ImageStyles';
import MediaQuery from 'react-responsive';
import ProductStyles from "../../styles/ProductStyles";

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
         {/* The SearchBar Component is a stretch goal <SearchBar /> */}
          <h2 className="row justify-content-center text-light mt-3 mb-3">
            Our Epic Produce!
          </h2>
        <Card style={ProductStyles.cardStyle} className="mx-auto" color="dark">
          <CardBody>
          {(this.state.products) ? this.state.products.map((product, index) => (
            <Row key={index}>
              <Col className="mx-auto my-auto">
                <img className="img-fluid rounded" style={ImageStyles.appImages} src={product.productImage} alt="" />
                <FormText color="light"><h4>{product.name}</h4></FormText>
                <FormText style={ProductStyles.priceStyle} color="light"><strong>${product.price}</strong></FormText>
                <Button color="secondary" className="mt-2" onClick={() => this.incrementItem(product)}>Add to Order</Button>
              </Col>
            </Row>
          )) : null}
          </CardBody>
        </Card>
        </MediaQuery>

      {/* Mobile Responsiveness */}
      <MediaQuery query={'(max-device-width: 500px)'}>
         {/* The SearchBar Component is a stretch goal <SearchBar /> */}
          <h2 className="row justify-content-center text-light mt-3 mb-3">
            Our Epic Produce!
          </h2>
        <Card style={ProductStyles.cardStyle} className="mx-auto" color="dark">
          <CardBody>
          {(this.state.products) ? this.state.products.map((product, index) => (
            <Row key={index}>
              <Col className="mx-auto my-auto">
                <img className="img-fluid rounded" style={ImageStyles.appImages} src={product.productImage} alt="" />
                <FormText color="light"><h4>{product.name}</h4></FormText>
                <FormText style={ProductStyles.priceStyle} color="light"><strong>${product.price}</strong></FormText>
                <Button color="secondary" className="mt-2" onClick={() => this.incrementItem(product)}>Add to Order</Button>
              </Col>
            </Row>
          )) : null}
          </CardBody>
        </Card>
        </MediaQuery>

      </div>
    );
  }
}
export default Product;
