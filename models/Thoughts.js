const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reactions"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);
thoughtSchema.virtual("reactionCount").get( function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema)

module.exports = Thought;