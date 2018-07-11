import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';


class Product extends Component {
  render() {
    const productStyle = {
      width: '250px',
      height: '200px',
    };
    return (
      <div>
      <Table className="w-75 mx-auto m-5 text-light" dark borderless>
        <tbody>
          <tr className="">
            <td><img style={productStyle} src="Images/5x6tomato.jpg" alt="" />$2.99 p/lb</td>
            <td><img style={productStyle} src="Images/apple.jpg" alt="" />$4.99 p/lb</td>
            <td><img style={productStyle} src="Images/avocado2.jpg" alt="" />$2.99 ea</td>
            <td><img style={productStyle} src="Images/banana.jpg" alt="" />$0.69 p/lb</td>
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
          {/* <tr>
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
          </tr> */}
        </tbody>
      </Table>
      </div>
    );
  }
}
export default Product;
