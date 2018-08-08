import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Input, InputGroup, InputGroupAddon } from 'reactstrap';
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
        <Card className="ml-5 mt-5 bg-dark text-light" style={CartStyles.desktopCart}>
          <CardHeader style={CartStyles.headerFooter} className="text-light" tag="h3"><strong>Your Epic Cart</strong></CardHeader>
          <CardBody>
            {(this.state.items) ? this.state.items.map((item, index) => (
              <div key={index}>
                  <img className="img-fluid" style={ImageStyles.appImages} src={item.productImage} alt="" />
                  <p><b>{item.name}</b></p>
                  <p>Qty: {item.qty}</p>
                  <Button onClick={() => this.incrementItem(item)} color="secondary"> + </Button>
                  <Button onClick={() => this.decrementItem(item)} color="secondary"> - </Button>
              </div>
            )) : null}
          </CardBody>
          <CardFooter style={CartStyles.headerFooter} className="text-light">Total : ${this.state.total}.00</CardFooter>
        </Card>
        </MediaQuery>
      
      </div>
    );
  }

}

export default Cart;