//@ts-nocheck
import * as express from 'express';
import { RequestHandler} from 'express-serve-static-core';
import * as multer from 'multer';
import db from '../../db';

let upload = multer({dest:'uploads/'})

const router: express.Router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const profilePicture = await db.ProfilePictures.one(id);
        res.json(profilePicture[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//this post req may change depending on how multer and stuff work for files
router.post('/', upload.single('avatar'), async (req: express.Request, res: express.Response) => {
    try {
        const fileName = req.file;
        const userId = req.body.userId;

        const newProfilePicture = await db.ProfilePictures.insert(userId, fileName);

        res.json({message: 'Pic!'});
        res.status(200).send(`profile picture created with id: ${newProfilePicture.insertId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//this put req may also change due to reasons as stated above 
router.put('/:id', upload.single('avatar'), async (req: express.Request, res: express.Response) => {
    try {
        const fileName = req.file;
        const id = Number(req.params.id);

        await db.ProfilePictures.update(fileName, id);

        res.json({message: 'Pic!'});
        res.status(200).send(`Picture edited at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.ProfilePictures.destroy(id);

        res.json({message: 'Pic!'});
        res.status(200).send(`picture deleted at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send;
    }
});

export default router;