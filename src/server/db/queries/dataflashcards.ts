import { Query } from "../index";

export interface IDataFlashCards {
  id?: number;
  question?: string;
  answer?: string;
  _created?: Date;
}

const all = async () => Query(`SELECT * FROM dataflashcards`);

const one = async (id: number) =>Query(`
  SELECT * FROM dataflashcards 
  WHERE id = ${id}`);

const insert = async (question: string, answer: string) => Query(`
  INSERT INTO dataflashcards (question, answer) 
  VALUES ('${question}', '${answer}')`);

const destroy = async (id: number) => Query(`
  Delete from dataflashcards 
  where ID = ${id}`);

export default {
  all,
  one,
  insert,
  destroy,
};
