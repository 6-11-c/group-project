import React from 'react';
import { Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Row, 
  Col, 
  Button, 
  FormText,
  InputGroup, 
  InputGroupAddon, 
  ListGroup, 
  ListGroupItem } from "reactstrap";
import axios from "axios";
import CartStyles from '../../styles/CartStyles';
import ImageStyles from '../../styles/ImageStyles';
import MediaQuery from 'react-responsive';

class Cart extends React.Component {

  state = {}

  componentDidMount() {
    let authToken = window.localStorage.auth_token;
    let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    axios.get(`/cart/${payload.userId}`).then((res) => {
      if(res.data) {
        let total = 0;
        for(let item of res.data.items) {
          if(item.qty > 1) {
            total += (item.qty * item.price);
          } else {
            total += item.price;
          }
        }
  
        setTimeout(() => {
          this.setState({
            items: res.data.items,
            total: total
          })
        }, 1000)
      } 
    })
  }

  incrementItem = (item) => {
    let authToken = window.localStorage.auth_token;
    let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    item.id = payload.userId;
    axios.post("/cart", item).then(() => {
      window.location.reload();
    })
  }

  decrementItem = (item) => {
    let authToken = window.localStorage.auth_token;
    let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    item.id = payload.userId;
    axios.put("/cart", item).then(() => {
      window.location.reload();
    })
  }

  render() {
    return (
      <div>
      {/* Desktop Responsiveness */}
        <MediaQuery query={'(min-device-width: 500px)'}>
        <Card className="ml-5 mt-5 bg-dark text-light rounded" style={CartStyles.desktopCart}>
          <CardHeader style={CartStyles.headerFooter} className="text-light" tag="h3"><strong>Your Epic Cart</strong></CardHeader>
          <CardBody>
            {(this.state.items) ? this.state.items.map((item, index) => (
              <Row key={index}>
                <Col className="">
                  <img className="img-fluid rounded" style={ImageStyles.appImages} src={item.productImage} alt="" />
                  <Row>
                    <FormText className="ml-3" color="light"><h5>{item.name} : </h5></FormText>
                    <FormText className="ml-3 pt-1" style={CartStyles.priceStyle} color="light">$ {item.price}</FormText>
                  </Row>
                  <InputGroup className="mx-auto">
                    <InputGroupAddon addonType="prepend">
                      <Button onClick={() => this.incrementItem(item)} color="secondary"> + </Button>
                    </InputGroupAddon>
                    <ListGroup>
                      <ListGroupItem placeholder="0" color="dark">{item.qty}</ListGroupItem>
                    </ListGroup>
                    <InputGroupAddon addonType="append">
                      <Button onClick={() => this.decrementItem(item)} color="secondary"> - </Button>
                    </InputGroupAddon>
                  </InputGroup>                           
                </Col>
              </Row>
            )) : null}
          </CardBody>
          <CardFooter style={CartStyles.headerFooter} className="text-light">Total : ${this.state.total}</CardFooter>
        </Card>
        </MediaQuery>

      {/* Mobile Responsiveness */}
        <MediaQuery query={'(max-device-width: 500px)'}>
        <Card className="bg-dark text-light rounded" style={CartStyles.mobileCart}>
          <CardHeader style={CartStyles.headerFooter} className="text-light" tag="h3"><strong>Your Epic Cart</strong></CardHeader>
          <CardBody>
            {(this.state.items) ? this.state.items.map((item, index) => (
              <Row key={index}>
                <Col className="">
                  <img className="img-fluid rounded" style={ImageStyles.appImages} src={item.productImage} alt="" />
                  <Row>
                    <FormText className="ml-3" color="light"><h5>{item.name} : </h5></FormText>
                    <FormText className="ml-3 pt-1" style={CartStyles.priceStyle} color="light">$ {item.price}</FormText>
                  </Row>
                  <InputGroup className="mx-auto">
                    <InputGroupAddon addonType="prepend">
                      <Button onClick={() => this.incrementItem(item)} color="secondary"> + </Button>
                    </InputGroupAddon>
                    <ListGroup>
                      <ListGroupItem placeholder="0" color="dark">{item.qty}</ListGroupItem>
                    </ListGroup>
                    <InputGroupAddon addonType="append">
                      <Button onClick={() => this.decrementItem(item)} color="secondary"> - </Button>
                    </InputGroupAddon>
                  </InputGroup>
                            
                </Col>
              </Row>
            )) : null}
          </CardBody>
          <CardFooter style={CartStyles.headerFooter} className="text-light">Total : ${this.state.total}</CardFooter>
        </Card>
        </MediaQuery>
      
      </div>
    );
  }

}

export default Cart;







//Alternate styling if above does not deploy

              // <div key={index}>
              //     <img className="img-fluid" style={ImageStyles.appImages} src={item.productImage} alt="" />
              //     <p><b>{item.name}</b></p>
              //     <p>Qty: {item.qty}</p>
              //     <Button onClick={() => this.incrementItem(item)} color="secondary"> + </Button>
              //     <Button onClick={() => this.decrementItem(item)} color="secondary"> - </Button>
              // </div>
