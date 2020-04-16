var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tradeId: {
        type: Schema.Types.ObjectId,
        ref: "Trade",
        required: true
    },
    responses: [{
        responseSender: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        responseSenderName: {
            type: String,
            required: true
        },
        responseReceiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        responseMessage: {
            type: String,
            required: true
        }
    }]
});

var Messages = mongoose.model("Messages", MessageSchema);

module.exports = Messages;
