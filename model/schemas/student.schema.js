/**packages */
const mongoose = require("mongoose");
/**Cuando tengo atributos unicos instalo el paquete mongoose-unique-validator por npm para hacer las validaciones*/
const validator= require("mongoose-unique-validator")
/**Schema creation*/
const studentSchema = new mongoose.Schema({
    code: {
        type:"String",
        required: true,
        unique: true
    },
    name:{
        type:"String",
        required: true
    },
    lastname:{
        type:"String",
        required: true
    },
    email:{
        type:"String",
        required: true,
        unique: true
    },
    phone:{
        type:"String",
        required: true,
        unique: true
    },
    career:{
        type:"String",
        required: true
    }
})
/**Schema exportation */
studentSchema.plugin(validator)
module.exports = studentSchema