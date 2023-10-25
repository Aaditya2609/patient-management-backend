import express from "express";
import { addPatient, deletePatient, getPatients, updatePatient } from "../controllers/patient.controller";

const router = express.Router();

router.route("/").get(getPatients)
router.route("/").post(addPatient)
router.route("/update/:id").post(updatePatient)
router.route("/:id").delete(deletePatient)
export { router }