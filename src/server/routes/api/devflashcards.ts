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
        const devFlashCards = await db.DevFlashCards.all();
        res.json(devFlashCards);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);
        const devFlashCard = await db.DevFlashCards.one(id);
        res.json(devFlashCard[0]);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try{
        const devFlashCard = req.body.devFlashCard;

        const newDevFlashCard = await db.DevFlashCards.insert(devFlashCard.question, devFlashCard.answer);

        res.json({message: 'Flashed!'})
        res.status(200).send(`
            data flash card created with id: ${newDevFlashCard.insertId}
        `)
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.DevFlashCards.destroy(id);

        res.json({message: 'Flashed!'});
        res.status(200).send(`flashcard deleted at id: ${id}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


export default router;