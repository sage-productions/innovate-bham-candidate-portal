import { Query } from "../index";

interface IUsers {
  id?: number;
  firstname?: string;
  lastname?: string;
  preferredname?: string;
  email?: string;
  password?: string;
  role?: string;
  _created?: Date;
}

// Work in Progress - May need to add more or edit these for functionality

const all = async () => Query(`
  Select users.id, users.firstname, users.lastname, users.preferredname, users.email, users.password, users.role from users`);

// const one = async (id:number) => Query(`Select users.id, users.firstname, users.lastname, users.preferredname, users.email, users.password, users.role from users where id = ?`, [id])

const findOneByEmail = async (email: string) =>
  Query(`SELECT * FROM users WHERE email =  '${email}'`);

const findOneById = async (id: number) =>
  Query(`SELECT * FROM users WHERE id = ${id}`);

const insert = async (firstname: string, lastname: string, preferredname: string, email: string, password: string) => Query(`
  INSERT INTO users (firstname, lastname, preferredname, email, password) 
  VALUES ('${firstname}', '${lastname}', '${preferredname}', '${email}', '${password}')
  `);

const update = (firstname: string, lastname: string, preferredname: string, email: string, id: number) => Query(`
  UPDATE users
  SET firstname = '${firstname}', lastname = '${lastname}',preferredname = '${preferredname}', email = '${email}', 
  WHERE users.id = ?;
`);

const destroy = (id: number) =>
  Query(`DELETE FROM users WHERE users.id = ${id}`);

export default {
  all,
  // one,
  findOneByEmail,
  findOneById,
  insert,
  update,
  destroy,
};
