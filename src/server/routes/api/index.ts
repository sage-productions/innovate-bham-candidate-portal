import * as express from "express";
// import db from "../../db"
import usersRouter from "./users";
import dataflashcardsRouter from './dataflashcards';
import devflashcardsRouter from './devflashcards';
import elevatorpitchesRouter from './elevatorpitches';
import profilepicturesRouter from './profilepictures';
import resumefeedbackRouter from './resumefeedback';
import resumesRouter from './resumes';
import userbioRouter from './userbio';

const router = express.Router();

router.use("/users", usersRouter);
router.use("/dataflashcards", dataflashcardsRouter);
router.use("/devflashcards", devflashcardsRouter);
router.use("/elevatorpitches", elevatorpitchesRouter);
router.use("/profilepictures", profilepicturesRouter);
router.use("/resumefeedback", resumefeedbackRouter);
router.use("/resumes", resumesRouter);
router.use("/userbio", userbioRouter);




export default router;
