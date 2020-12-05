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
  Query(`SELECT * FROM userbio WHERE id = ${id}`);

const update = (city: string, bio: string, phone: string, linkedin: string, github: string, id: number) => Query(`
  UPDATE userbio
  SET 
    city = '${city}',
    bio = '${bio}',
    phone = '${phone}',
    linkedin = '${linkedin}',
    github = '${github}'
  WHERE userbio.id = ?`);

const insert = async (userid: number, city: string, bio: string, phone: string, linkedin: string, github: string, id: number) => Query(`
  INSERT INTO userbio (userid, city, bio, phone, linkedin, github) 
  values ('${userid}', '${city}', '${bio}', '${phone}', '${linkedin}', '${github}')
  WHERE id = ${id}`);

const destroy = async (id: number) => Query(`
  Delete from userbio where ID = ${id}`);

export default {
  all,
  one,
  update,
  insert,
  destroy,
};
