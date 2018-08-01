import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import CartStyles from '../../styles/CartStyles';
import MediaQuery from 'react-responsive';

const Cart = (props) => {
  return (
    <div>
      <MediaQuery query={'(max-device-width: 500px)'}>
      <Card className="bg-dark text-light" style={CartStyles.mobileCart}>
        <CardHeader style={CartStyles.headerFooter} className="text-light" tag="h5">Your Epic Cart</CardHeader>
        <CardBody>
          <CardTitle>Product Name Here</CardTitle>
          <CardText>Product Price Here</CardText>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
              <Button /*onClick={}*/ color="light"> + </Button>
            </InputGroupAddon>
            <Input style={CartStyles.inputStyle} name="number"></Input>
            <InputGroupAddon addonType="append">
              <Button /*onClick={}*/ color="light"> - </Button>
              <Button /*onClick={}*/ color="danger" className="ml-2">Delete</Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
        <CardFooter style={CartStyles.headerFooter} className="text-light">Total : calculated total goes here</CardFooter>
      </Card>
      </MediaQuery>

      <MediaQuery query={'(min-device-width: 500px)'}>
      <Card className="ml-5 mt-5 bg-dark text-light" style={CartStyles.desktopCart}>
        <CardHeader style={CartStyles.headerFooter} className="text-light" tag="h3"><strong>Your Epic Cart</strong></CardHeader>
        <CardBody>
          <CardTitle>Product Name Here</CardTitle>
          <CardText>Product Price Here</CardText>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
              <Button /*onClick={}*/ color="light"> + </Button>
            </InputGroupAddon>
            <Input style={CartStyles.inputStyle} name="number"></Input>
            <InputGroupAddon addonType="append">
              <Button /*onClick={}*/ color="light"> - </Button>
              <Button /*onClick={}*/ color="danger" className="ml-2">Delete</Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
        <CardFooter style={CartStyles.headerFooter} className="text-light">Total : calculated total goes here</CardFooter>
      </Card>
      </MediaQuery>
    </div>
  );
};

export default Cart;