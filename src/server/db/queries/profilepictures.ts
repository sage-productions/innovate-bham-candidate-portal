import { Query } from "../index";

export interface IProfilePictures {
  id?: number;
  userid?: number;
  filename?: string;
  _created?: Date;
}

const one = async (id: number) =>
  Query(`SELECT * FROM profilepictures WHERE id = ?`, [id]);

const update = (filename: string) =>
  Query(
    `
  UPDATE profilepictures
  SET 
  filename = ?  
  WHERE profilepictures.id = ?`,
    [filename]
  );


const insert = async (userid: number, filename: string) =>
  Query(`INSERT INTO profilepictures (userid, filename) VALUES (?,?)`, [
    userid,
    filename,
  ]);

const destroy = async (id: number) =>
  Query(`Delete from resumefeedback where ID = ?`, [id]);

export default {
  one,
  update,
  insert,
  destroy,
};
