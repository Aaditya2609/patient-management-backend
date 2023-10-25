import mongoose from "mongoose";
import { Ward } from "./wardModel";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    medicalhistory: {
        type: String,
        required: true
    },
    contact: {
        phone: { type: String, required: true }
    },
    wardId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true
    }
})
const Patient=mongoose.model("Patient",patientSchema);
export {Patient}