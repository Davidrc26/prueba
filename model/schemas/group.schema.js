/**packages */
const mongoose = require("mongoose");
/**Schema creation*/
const groupSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId, //References the forean key
        ref: "coll_course",
        required: true,
    },
    period_id: {
        type: mongoose.Schema.Types.ObjectId, //References the forean key
        ref: "coll_period",
        required: true,
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId, //References the forean key
        ref: "coll_teacher",
        required: true,
    },
    number:{
        type:"Number",
        required: true,
    }
})
/**Schema exportation */
module.exports = groupSchema