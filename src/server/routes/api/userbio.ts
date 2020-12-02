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
        const userBios = await db.UserBio.all();
        res.json(userBios);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const userBio = await db.UserBio.one(id);

        res.json(userBio[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const userBio = req.body.userBio;

        const newUserBio = await db.UserBio.insert(
            userBio.userid,
            userBio.city,
            userBio.bio,
            userBio.phone,
            userBio.linkedin,
            userBio.github
        );

        res.json({message: 'Bio!'});
        res.status(200).send(`bio created at id: ${newUserBio.insertId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const userBio = req.body.userBio;

        await db.UserBio.update(
            userBio.city,
            userBio.bio,
            userBio.phone,
            userBio.linkedin,
            userBio.github,
            id
        );

        res.json({message: 'Bio!'});
        res.status(200).send(`Bio edited at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.UserBio.destroy(id);

        res.json({message: 'Bio!'});
        res.status(200).send(`Bio deleted at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;