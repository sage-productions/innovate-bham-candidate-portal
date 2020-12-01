import { Query } from "../index";

export interface IUserBios {
  id?: number;
  userid?: number;
  resumeid?: number;
  content?: string;
  _created?: Date;
}

const all = async () => Query(`SELECT * FROM userbio`);

const one = async (id: number) =>
  Query(`SELECT * FROM userbio WHERE id = ?`, [id]);

const update = (content: string, id:number ) =>
  Query(
    `
  UPDATE userbio
  SET 
  content = ?  
  WHERE userbio.id = ?`,
    [content, id]
  );

const insert = async (userid: number, resumeid: number, content: string) =>
  Query(
    `INSERT INTO resumefeedback (userid, resumeid, content) VALUES (?,?,?)`,
    [userid, resumeid, content]
  );

const destroy = async (id: number) =>
  Query(`Delete from resumefeedback where ID = ?`, [id]);

export default {
  all,
  one,
  update,
  insert,
  destroy,
};
