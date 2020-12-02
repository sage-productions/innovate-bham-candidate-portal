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
        const elevatorPitches = await db.ElevatorPitches.all();
        res.json(elevatorPitches);
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
});

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);
        const elevatorPitch = await db.ElevatorPitches.one(id);
        res.json(elevatorPitch[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try{
        const elevatorPitch = req.body.elevatorPitch;

        const newElevatorPitch = await db.ElevatorPitches.insert(elevatorPitch.userid, elevatorPitch.content);

        res.json({message: 'Pitched!'});
        res.status(200).send(`Pitch created with id: ${newElevatorPitch.insertId}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);

        await db.ElevatorPitches.destroy(id);

        res.json({message: 'Pitched!'});
        res.status(200).send(`Pitch deleted at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


export default router;