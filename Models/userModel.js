const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    cedula: { type: Number },
    birthday: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone_number: { type: Number },
    address: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    status:{type: String, enum:['pending','active'], default: 'pending'},
    role: { type: String, default:"client"} 
});

module.exports = mongoose.model("User", userSchema);