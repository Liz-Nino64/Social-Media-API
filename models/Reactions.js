const { Schema } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        id: mongoose.ObjectId(),
        default: ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1
    },
    username: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (date) => {
            if (date) return date.toISOString()
        }
    }
})