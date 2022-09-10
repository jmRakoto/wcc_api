import express, { Request, Response } from 'express';
import cors from "cors";
import routes from './app/routes';
import { connection } from './app/service/DatabaseService';
import { config } from './app/config/config';

connection();

const app = express();
const PORT = config.port || 3000

app.use(
    cors({
      origin: "*",
      methods: ['GET' ,'HEAD' ,'PUT' ,'PATCH' ,'POST' ,'DELETE'],
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static("uploads"));

app.use('/api', routes);
app.route('/').get((req: Request, res: Response) => res.sendStatus(200));
app.all('/**', (req: Request, res: Response) => res.status(404).send('Url not found'));

const server = app.listen(PORT , () => {
    console.log(`server is listening on port ${PORT}`);
});

export default server;