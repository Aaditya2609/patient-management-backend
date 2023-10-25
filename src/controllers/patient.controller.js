import { Patient } from "../models/patientModel";

const getPatients = async (req, res) => {
    try {
        const patients =await Patient.find().populate('wardId');
        res.status(200).json(patients)
    }
    catch (e) {
        res.status(500).json({ error: "Internal Server Error",e:e })
    }
}

const addPatient = async (req, res) => {
    try {
        const { name, age, gender,medicalhistory,contact,wardId } = req.body
        const newPatient = new Patient({ name, age, gender,medicalhistory,contact,wardId })
        await newPatient.save()
        res.status(201).json(newPatient)
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error',e:e });
    }
}

const updatePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const updatedPatientData = req.body;
        const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatedPatientData, { new: true })
        if (!updatedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json(updatedPatient);
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error',e:e });
    }
}

const deletePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const deletedPatient = await Patient.findByIdAndRemove(patientId)
        if (!deletedPatient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully', patient: deletedPatient });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
export{getPatients,addPatient,deletePatient,updatePatient}