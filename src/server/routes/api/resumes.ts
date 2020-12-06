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

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const resumes = await db.Resumes.all();
        res.json(resumes);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const resume = await db.Resumes.one(id);

        res.json(resume[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', upload.single('resume'), async (req: express.Request, res: express.Response) => {
    try {
        const fileName = req.file;
        const userId = req.body.userId;

        const newResume = await db.Resumes.insert(userId, fileName);

        res.json({message: 'Resume!'});
        res.status(200).send(`Resume created at id: ${newResume.insertId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put('/:id', upload.single('resume'), async (req: express.Request, res: express.Response) => {
    try {
        const fileName = req.body.fileName;
        const id = Number(req.params.id);

        await db.Resumes.update(fileName, id);

        res.json({message: 'Resume!'});
        res.status(200).send(`Resume edited at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);

        await db.Resumes.destroy(id);

        res.json({message: 'Resume!'});
        res.status(200).send(`Resume deleted at id: ${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;