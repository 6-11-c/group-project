const mongoose = require('mongoose');
const Cart = require("../models/cart");

exports.add_to_cart = (req, res, next) => {
  Cart.findOne({owner: req.body.id}).then((cart) => {
    if(!cart) {
      let newCart = new Cart();
      req.body.qty = 1;
      newCart.items = [req.body];
      newCart.owner = req.body.id;
      newCart.save((err) => {
        if(err) {
          res.sendStatus(500)
        } else {
          res.sendStatus(200)
        }
      })
    } else {
      let cartId = cart._id;
      let cartItems = cart.items;
      let matching = cartItems.filter((item) => item.name === req.body.name);
      let nonMatching = cartItems.filter((item) => item.name !== req.body.name);

      if(matching.length > 0) {
        matching[0].qty = (matching[0].qty + 1);
        nonMatching.push(matching[0])
        Cart.findById(cartId, (err, c) => {
          if(err) {
            res.sendStatus(500)
          } else {
            c.items = nonMatching;
            c.save((err) => {
              if(err) {
                res.sendStatus(500)
              } else {
                res.sendStatus(200)            
              }
            })
          }
        })       
      } else {
        req.body.qty = 1;
        cartItems.push(req.body)
        Cart.findById(cartId, (err, c) => {
          if(err) {
            res.sendStatus(500)
          } else {
            c.items = cartItems;
            c.save((err) => {
              if(err) {
                res.sendStatus(500)
              } else {
                res.sendStatus(200)            
              }
            })
          }
        })            
      }
    }
  })
}

exports.delete_from_cart = (req, res, next) => {
  Cart.findOne({owner: req.body.id}).then((cart) => {
    let cartId = cart._id;
    let cartItems = cart.items;
    let matching = cartItems.filter((item) => item.name === req.body.name);
    let nonMatching = cartItems.filter((item) => item.name !== req.body.name);

    if(matching[0].qty === 1) {
      Cart.findById(cartId, (err, c) => {
        if(err) {
          res.sendStatus(500)
        } else {
          c.items = nonMatching;
          c.save((err) => {
            if(err) {
              res.sendStatus(500)
            } else {
              res.sendStatus(200)            
            }
          })
        }
      })
    } else {
      matching[0].qty = (matching[0].qty - 1);
      nonMatching.push(matching[0])
      Cart.findById(cartId, (err, c) => {
        if(err) {
          res.sendStatus(500)
        } else {
          c.items = nonMatching;
          c.save((err) => {
            if(err) {
              res.sendStatus(500)
            } else {
              res.sendStatus(200)            
            }
          })
        }
      })
    }
  })
}

exports.get_cart = (req, res, next) => {
  Cart.findOne({owner: req.params.id}).then((cart) => {
    res.json(cart);
  })
}