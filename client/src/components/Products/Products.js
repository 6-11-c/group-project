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


      {/* <Table className="w-75 mx-auto m-5 table-responsive-sm" dark borderless>
        <tbody>
          <tr>
            <td><img className="img-fluid thumbnail" src="Images/5x6tomato.jpg" alt="" />$2.99 p/lb</td>
            <td><img className="img-fluid thumbnail" src="Images/apple.jpg" alt="" />$4.99 p/lb</td>
            <td><img className="img-fluid thumbnail" src="Images/avocado2.jpg" alt="" />$2.99 ea</td>
            <td><img className="img-fluid thumbnail" src="Images/banana.jpg" alt="" />$0.69 p/lb</td>
          </tr>
          <tr>
            <td>5 X 6 Tomatoes</td>
            <td>Fuji Apples</td>
            <td>Hass Avocados</td>
            <td>Bananas</td>
          </tr>
          <tr>
            <td><Button color="light">Add to Order</Button></td>
            <td><Button color="light">Add to Order</Button></td>
            <td><Button color="light">Add to Order</Button></td>
            <td><Button color="light">Add to Order</Button></td>
          </tr>
          <tr>
            <td><img src="Images/basil.jpg" alt="" />Fresh Basil</td>
            <td><img src="Images/bellpeppers.jpg" alt="" />Mixed Bell Peppers</td>
            <td><img src="Images/blueberry.jpg" alt="" />Blueberries</td>
            <td><img src="Images/cherrytomato.jpg" alt="" />Cherry Tomatoes</td>
          </tr>
          <tr>
            <td><img src="Images/garlic.jpg" alt="" />Garlic Cloves</td>
            <td><img src="Images/lemon.jpg" alt="" />Lemons</td>
            <td><img src="Images/lime.jpg" alt="" />Limes</td>
            <td><img src="Images/orange.jpg" alt="" />Oranges</td>
          </tr>
          <tr>
            <td><img src="Images/raspberry.jpg" alt="" />Raspberries</td>
            <td><img src="Images/redonion.jpg" alt="" />Red Onions</td>
            <td><img src="Images/romatomato.jpg" alt="" />Roma Tomatoes</td>
            <td><img src="Images/rosemary.jpg" alt="" />Rosemary</td>
          </tr>
          <tr>
            <td><img src="Images/sage.jpg" alt="" />Sage</td>
            <td><img src="Images/strawberry.jpg" alt="" />Strawberries</td>
            <td><img src="Images/thyme.jpg" alt="" />Thyme</td>
            <td><img src="Images/yellowonion.jpg" alt="" />Yellow Onions</td>
          </tr>
        </tbody>  
      </Table> */}