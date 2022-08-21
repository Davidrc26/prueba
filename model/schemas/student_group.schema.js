/**packages */
const mongoose = require("mongoose");
/**Schema creation*/
const studentGroupSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId, //References the forean key
        ref: "coll_student",
        required: true,
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId, //References the forean key
        ref: "coll_period",
        required: true,
    }
})
/**Schema exportation */
module.exports = studentGroupSchema