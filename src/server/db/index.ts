// import * as mysql from 'mysql';
// import config from '../config';
// import Tokens from "./queries/tokens"
// import Users from "./queries/users"
// //table query imports

// //node - mysql connection pool
// export const pool = mysql.createPool(config.mysql);

// //query helper method
// export const Query = (query: string, values?: any) => {
//     return new Promise<Array<any>>((resolve, reject) => {
//         pool.query(query, [values], (err, results) => {
//             if (err) reject(err);
//             return resolve(results);
//         });
//     });
// };

// export default {
//     Tokens,
//     Users
// };