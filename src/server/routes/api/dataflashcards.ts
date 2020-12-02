//@ts-nocheck
import * as express from 'express';
import { RequestHandler} from 'express-serve-static-core';
import db from '../../db';

const router: express.Router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const dataFlashCards = await db.DataFlashCards.all();
        res.json(dataFlashCards);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);
        const dataFlashCard = await db.DataFlashCards.one(id);
        res.json(dataFlashCard[0]);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try{
        const dataFlashCard = req.body.dataFlashCard;

        const newDataFlashCard = await db.DataFlashCards.insert(dataFlashCard.question, dataFlashCard.answer);

        res.json({message: 'Flashed!'})
        res.status(200).send(`
            data flash card created with id: ${newDataFlashCard.insertId}
        `)
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.DataFlashCards.destroy(id);

        res.json({message: 'Flashed!'});
        res.status(200).send(`flashcard deleted at id: ${id}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


export default router;