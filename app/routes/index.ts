import { Router } from 'express';

import exchange from './exchange';

const routes = Router();

routes.use('/exchange', exchange);

export default routes;