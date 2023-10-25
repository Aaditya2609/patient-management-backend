import { Ward } from "../models/wardModel";

const getWards = async (req, res) => {
    try {
        const wards = await Ward.find();
        res.status(200).json(wards)
    }
    catch (e) {
        res.status(500).json({ error: "Internal Server Error",})
    }
}

const addWard = async (req, res) => {
    try {
        const { name, capacity, specializations } = req.body
        const newWard = new Ward({ name, capacity, specializations })
        await newWard.save()
        res.status(201).json(newWard)
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error', });
    }
}

const updateWard = async (req, res) => {
    try {
        const wardId = req.params.id;
        const updatedWardData = req.body;
        const updatedWard = await Ward.findByIdAndUpdate(wardId, updatedWardData, { new: true })
        if (!updatedWard) {
            return res.status(404).json({ message: "Ward not found" });
        }
        res.status(200).json(updatedWard);
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error',e:e });
    }
}

const deleteWard = async (req, res) => {
    try {
        const wardId = req.params.id;
        const deletedWard = await Ward.findByIdAndRemove(wardId)
        if (!deletedWard) {
            return res.status(404).json({ error: 'Ward not found' });
        }
        res.status(200).json({ message: 'Ward deleted successfully', ward: deletedWard });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { addWard, getWards, deleteWard, updateWard }