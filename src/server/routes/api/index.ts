import * as express from "express";
// import db from "../../db"
import usersRouter from "./users"

const router = express.Router();

router.use("/users", usersRouter);



export default router;
