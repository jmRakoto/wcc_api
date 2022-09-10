import { config } from '../config/config';
import mongoose from 'mongoose';

export function connection() {
    mongoose.connect(`${config.dbhost}/${config.dbname}`)
        .then(() => {
            console.log('Mongo : Connected ✔️');
        })
        .catch((err) => {
            console.log('Mongo : Not connected ️❌️');
            throw err;
        });
}
