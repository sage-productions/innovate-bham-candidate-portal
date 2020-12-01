import * as mysql from 'mysql';
import config from '../config';
import Accesstokens from "./queries/accesstokens"
import Users from "./queries/users"
import Resumes from "./queries/resumes"
//table query imports

//node - mysql connection pool
export const pool = mysql.createPool(config.mysql);

//query helper method
export const Query = (query: string, values?: any) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) reject(err);
            return resolve(results);
        });
    });
};

export default {
    Accesstokens,
    Users,
    Resumes,
    
};