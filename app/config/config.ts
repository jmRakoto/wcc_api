import * as dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

assert(process.env.HOST_URL, "HOST_URL is required");
assert(process.env.PORT, "PORT is required");
assert(process.env.DB_HOST, "DB_HOST is required");
assert(process.env.DB_NAME, "DB_NAME is required");

export const config = {
    hostUrl: process.env.HOST_URL,
    port: process.env.PORT,
    dbname: process.env.DB_NAME,
    dbhost: process.env.DB_HOST,
};
