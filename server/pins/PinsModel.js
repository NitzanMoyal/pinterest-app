const db = require('../db');
const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const pinSchema = new db.Schema(
    {
        tile: String,
        body: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        likes: { type: Number, default: 0 },
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        date: { type: Date, default: Date.now },
        imageURL: String   // instead of this
        }
);

pinSchema.plugin(mongoosePaginate);

const Pin = db.model('Pin', pinSchema);


module.exports =  Pin;