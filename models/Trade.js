var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  reqItem: {
    type: String,
    required: true
  },
  reqItemQty: {
    type: Number,
    required: true
  },
  availItem: {
    type: String,
    required: true
  },
  availItemQty: {
    type: Number,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default : false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Trade = mongoose.model("Trade", TradeSchema);

module.exports = Trade;
