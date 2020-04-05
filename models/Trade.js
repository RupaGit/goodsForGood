var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  tradeName: {
    type: String,
    required: true
  },
  itemsTrading: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Trade = mongoose.model("Trade", TradeSchema);

module.exports = Trade;
