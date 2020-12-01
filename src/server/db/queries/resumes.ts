import { Query } from "../index";

interface IResumes {
  id?: number;
  userid?: number;
  filename: string;
  _created?: Date;
}

const all = () => Query(`Select * from resumes`);

const one = async (id: number) =>
  Query(`SELECT * FROM resumes WHERE id = ${id}'`);

const insert = async (filename: string, userid: number) =>
  Query(`INSERT INTO resumes(filename, userid)`, [filename, userid]);

export default {
  all,
  one,
  insert,
};
