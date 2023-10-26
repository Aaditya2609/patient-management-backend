import mongoose from "mongoose";
const wardModel=mongoose.Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    specializations: { type: String, required: true },
    daysofstay:{type: Number, required: true }
})
const Ward=mongoose.model("Ward",wardModel);
export {Ward}