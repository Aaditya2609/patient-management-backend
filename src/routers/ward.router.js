import express from "express"
import { addWard, deleteWard, getWards, updateWard } from "../controllers/ward.controller"

const router = express.Router()

router.route("/").get(getWards)
router.route("/").post(addWard)
router.route("/update/:id").post(updateWard)
router.route("/:id").delete(deleteWard)

export { router }