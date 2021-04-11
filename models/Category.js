const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const CategorySchema = new Schema (
  {
      categoryText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280
      },
      createdAt: {
          type: Date,
          default: Date.now,
          get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      },
      username: {
          type: String,
          required: true,
          ref: 'User'
      }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
}
)

const Category = model('Category', CategorySchema);

module.exports = Category;