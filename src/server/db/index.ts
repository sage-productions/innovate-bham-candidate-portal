import * as mysql from "mysql";
import config from "../config";

//table query imports
import Accesstokens from "./queries/accesstokens";
import Users from "./queries/users";
// import UserBio from "./queries/userbio";
import Resumes from "./queries/resumes";
import ResumeFeedback from "./queries/resumefeedback";
import ElevatorPitches from "./queries/elevatorpitches";
import DevFlashCards from "./queries/devflashcards";
import DataFlashCards from "./queries/dataflashcards";
// import ProfilePictures from "./queries/profilepictures";



//node - mysql connection pool
export const pool = mysql.createPool(config.mysql);

//query helper method
export const Query = (query: string, values?: any) => {
  return new Promise<Array<any>>((resolve, reject) => {
    pool.query(query, [values], (err, results) => {
      if (err) reject(err);
      return resolve(results);
    });
  });
};

export default {

  Accesstokens,
  Users,
  // UserBio,
  Resumes,
  ResumeFeedback,
  ElevatorPitches,
  DevFlashCards,
  DataFlashCards,
};
