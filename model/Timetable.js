const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
    number: {
        type: String,
    },
    section: {
        type: String,
    },
    title: {
        type: String,
    },
    deliveryMode: {
        type: String,
    },
    classMode: {
        type: String,
    },
    Professor: {
        type: String,
    },
    classroom: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    deliveryDay: {
        type: String,
    },
});

module.exports = mongoose.model("timetableSemester2", timetableSchema);
