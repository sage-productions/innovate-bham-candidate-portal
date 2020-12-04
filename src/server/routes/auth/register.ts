import * as express from 'express';

import DB from '../../db';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        // let columns = Object.keys(user).join(', ');
        // let values = Object['values'](user);
        let result: any = await DB.Users.insert(user.firstname, user.lastname, user.preferredname, user.email, user.password);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'candidate',
            userid: result.insertId
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;