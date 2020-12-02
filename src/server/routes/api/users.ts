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
        const users = await db.Users.all()
        res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
});

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const user = req.body.user;

        await db.Users.update(user.firstname, user.lastname, user.preferredname, user.email, id);

        res.json({message: 'User!'});
        res.status(200).send(`User edited at id: ${id}`);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.Users.destroy(id);

        res.json({message: 'User!'});
        res.status(200).send(`User deleted at id: ${id}`);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
});

export default router;
