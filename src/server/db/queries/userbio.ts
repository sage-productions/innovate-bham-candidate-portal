import { Query } from "../index";

export interface IUserBios {
  id?: number;
  userid?: number;
  city?: string;
  bio?: string;
  phone?: string;
  linkedin: string;
  github: string;
  _created?: Date;
}

const all = async () => Query(`SELECT * FROM userbio`);

const one = async (id: number) =>
  Query(`SELECT * FROM userbio WHERE id = ?`, [id]);

const update = (
  id: number,
  city: string,
  bio: string,
  phone: string,
  linkedin: string,
  github: string
) =>
  Query(
    `
  UPDATE userbio
  SET 
    city = ?,
    bio = ?,
    phone = ?,
    linkedin = ?,
    github = ?
  WHERE userbio.id = ?`,
    [id, city, bio, phone, linkedin, github]
  );

const insert = async (
  userid: number,
  city: string,
  bio: string,
  phone: string,
  linkedin: string,
  github: string
) =>
  Query(
    `INSERT INTO userbio (userid, city, bio, phone, linkedin, github) values (?,?,?,?,?,?)`,
    [userid, city, bio, phone, linkedin, github]
  );

const destroy = async (id: number) =>
  Query(`Delete from userbio where ID = ?`, [id]);

export default {
  all,
  one,
  update,
  insert,
  destroy,
};
