import { Query } from "../index";

export interface IElevatorPitches {
  id?: number;
  userid?: number;
  content?: string;
  _created?: Date;
}

const all = async () =>
  Query(
    `SELECT * FROM elevatorpitches join users on elevatorpitches.userid = users.id`
  );

const one = async (userid: number) =>
  Query(`
  SELECT * FROM elevatorpitches 
  WHERE userid = ${userid}`);

const insert = async (userid: number, content: string) =>
  Query(`
  INSERT INTO elevatorpitches (userid, content) 
  VALUES (${userid}, '${content}')`);

const destroy = async (id: number) =>
  Query(`
  Delete from elevatorpitches 
  where ID = ${id}`);

export default {
  all,
  one,
  insert,
  destroy,
};
