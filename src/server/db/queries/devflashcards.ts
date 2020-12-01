import { Query } from "../index";

export interface IDevFlashCards {
  id?: number;
  question?: string;
  answer?: string;
  _created?: Date;
}

const all = async () => Query(`SELECT * FROM devflashcards`);

const one = async (id: number) =>
  Query(`SELECT * FROM devflashcards WHERE id = ?`, [id]);

const insert = async (question: string, answer: string) =>
  Query(`INSERT INTO devflashcards (question, answer) VALUES (?,?)`, [
    question,
    answer,
  ]);

const destroy = async (id: number) =>
  Query(`Delete from devlashcards where ID = ?`, [id]);

export default {
  all,
  one,
  insert,
  destroy,
};
