/**packages */
const mongoose = require("mongoose");
/**Cuando tengo atributos unicos instalo el paquete mongoose-unique-validator por npm para hacer las validaciones*/
const validator= require("mongoose-unique-validator")
/**Schema creation*/
const teacherSchema = new mongoose.Schema({
    documento: {
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
    office:{
        type:"String",
        required: true
    },
    departament:{
        type:"String",
        required: true
    }
})
/**Schema exportation */
teacherSchema.plugin(validator)
module.exports = teacherSchema