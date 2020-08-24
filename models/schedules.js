// jshint.unstable bigint: true
var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

Schedules = mongoose.model('Schedules', new mongoose.Schema({
    memberID: {
        type: SchemaTypes.Long,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    delivery: {
        type: String,
        required: true,
    }
}));

module.exports = Schedules;