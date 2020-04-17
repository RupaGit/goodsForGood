var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var FeedSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    dislikes: {
        type: Number,
        required: false
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
});

var Feeds = mongoose.model("Feeds", FeedSchema);

module.exports = Feeds;
