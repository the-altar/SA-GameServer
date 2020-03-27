// set up mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = Schema({
    "name": {
        "type": String
    },
    "releaseStatus":Boolean,
    "facepic": {
        "type": String
    },
    "skillPoints": {
        "type": Number
    },
    "hitPoints": {
        "type": Number
    },
    "description": {
        "type": String
    },
    "skills": {
        "type": [
            Schema.Types.Mixed
        ]
    }
});

module.exports = mongoose.model('Character', CharacterSchema);
// the above is necessary as you might have embedded schemas which you don't export

