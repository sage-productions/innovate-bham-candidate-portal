import * as express from "express";
// import db from "../../db"
import usersRouter from "./users";
import dataflashcardsRouter from './dataflashcards';
import devflashcardsRouter from './devflashcards';
import elevatorpitchesRouter from './elevatorpitches';
import profilepicturesRouter from './profilepictures';
import resumefeedbackRouter from './resumefeedback';

const router = express.Router();

router.use("/users", usersRouter);
router.use("/dataflashcards", dataflashcardsRouter);
router.use("/devflashcards", devflashcardsRouter);
router.use("/elevatorpitches", elevatorpitchesRouter);
router.use("/profilepictures", profilepicturesRouter);
router.use("/resumefeedback", resumefeedbackRouter);



export default router;
