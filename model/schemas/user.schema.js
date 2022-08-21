/**packages */
const mongoose = require("mongoose");
/**Cuando tengo atributos unicos instalo el paquete mongoose-unique-validator por npm para hacer las validaciones*/
const validator= require("mongoose-unique-validator")
/**Schema creation*/
const userSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: true
    },
    lastname:{
        type:"String",
        required: true
    },
    username:{
        type:"String",
        required: true,
        unique: true
    },
    password:{
        type:"String",
        required: true
    },
    role:{
        type:"String",
        required: true
    }
})
/**Schema exportation */
userSchema.plugin(validator)
module.exports = userSchema