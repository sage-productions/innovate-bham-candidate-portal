import { Query } from "../index";

export interface IResumes {
  id?: number;
  userid?: number;
  filename: string;
  _created?: Date;
}

const all = () => Query(`Select * from resumes`);

const one = async (id: number) =>
  Query(`SELECT * FROM resumes WHERE id = ${id}'`);

  const update = (filename: string, id:number) =>
  Query(
    `
  UPDATE resumes
  SET 
  filename = ?  
  WHERE resumes.id = ?`,
    [filename, id]
  );


const insert = async (filename: string, userid: number) =>
  Query(`INSERT INTO resumes(filename, userid) VALUES (?,?)`, [filename, userid]);

  const destroy = async (id:number) => Query(`DELETE FROM resumes where id = ?`[id])

export default {
  all,
  one,
  insert,
  update,
  destroy
};
