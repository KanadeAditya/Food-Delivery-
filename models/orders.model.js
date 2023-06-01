const mongoose = require('mongoose');
const {UserModel} = require('./users.model.js')
const {RestaurantModel} = require('./restaurant.model.js')
// {
//     _id: ObjectId,
//     user : { type: ObjectId, ref: 'User' },
//     restaurant : { type: ObjectId, ref: 'Restaurant' },
//   items: [{
//     name: String,
//     price: Number,
//     quantity: Number
//   }],
//   totalPrice: Number,
//   deliveryAddress: {
//     street: String,
//     city: String,
//     state: String,
//     country: String,
//     zip: String
//   },
//   status: String // e.g, "placed", "preparing", "on the way", "delivered"
// }
  
const ordersschema = mongoose.Schema({
    user : { type: String},
    restaurant : {type: String },
  items: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  status: {type : String,  default : "preparing" , enum:["placed", "preparing", "on the way", "delivered"]} 
})

const OrderModel = mongoose.model('order',ordersschema);

module.exports = {OrderModel}
