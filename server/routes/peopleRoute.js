import express from "express";
import {
  createPerson,
  getAllPeople,
  getPerson,
  updatePerson,
  deletePerson,
} from "../controllers/peopleCntrl.js";

const router = express.Router();

router.post("/create", createPerson);
router.get("/all", getAllPeople);
router.get("/:id", getPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export { router as peopleRoute };
