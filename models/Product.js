const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const TagSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      tagId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      tagBody: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const ProductSchema = new Schema (
    {
        productText: {
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
        },
        tags: [TagSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
  }
)


const Product = model('Product', ProductSchema);

  // get total count of friends on retrieval
  ProductSchema.virtual('tagCount').get(function() {
    return this.tags.length;
  });


module.exports = Product;

