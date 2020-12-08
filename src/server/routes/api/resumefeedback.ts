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
    try{
        const resumeFeedback = await db.ResumeFeedback.all();
        res.json(resumeFeedback);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/:userid', async (req: express.Request, res: express.Response) => {
    try{
        const userid = Number(req.params.userid);
        const resumeFeedback = await db.ResumeFeedback.one(userid);

        res.json(resumeFeedback);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/:userid', async (req: express.Request, res: express.Response) => {
    try {
        const resumeFeedback = req.body;

        const newResumeFeedback = await db.ResumeFeedback.insert(
            resumeFeedback.userid,
            resumeFeedback.resumeid,
            resumeFeedback.content
        );

        res.json({message: 'Feedback!'});
        res.status(200).send(`Feedback created with id: ${newResumeFeedback.insertId}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const content: string = req.body.content;
        const id = Number(req.params.id);

        await db.ResumeFeedback.update(content, id);

        res.json({message: 'Feedback!'});
        res.status(200).send(`Feedback edited at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.ResumeFeedback.destroy(id);

        res.json({message: `Feedback!`});
        res.status(200).send(`feedback deleted at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;