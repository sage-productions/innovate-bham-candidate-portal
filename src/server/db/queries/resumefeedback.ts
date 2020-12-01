import { Query } from "../index";

export interface IResumeFeedback {
  id?: number;
  userid?: number;
  resumeid?: number;
  content?: string;
  _created?: Date;
}

const all = async () => Query(`SELECT * FROM resumefeedback`);

const one = async (id: number) =>
  Query(`SELECT * FROM resumefeedback WHERE id = ?`, [id]);

const update = (content: string) =>
  Query(
    `
  UPDATE resumefeedback
  SET 
  content = ?  
  WHERE resumefeedback.id = ?`,
    [content]
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
