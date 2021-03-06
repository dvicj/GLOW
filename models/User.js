const { Schema, model } = require('mongoose');
const moment = require('moment');


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  products: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Product'
      }
    ]
  },
  { 
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

// create the User Model using the Schema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('productCount').get(function() {
  return this.products.length;
});


  // export the User model
module.exports = User;