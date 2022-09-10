import { Router } from "express";
import ExchangeController from "../controllers/ExchangeController";

const routes = Router();

// Post new exchange
routes.post('/', ExchangeController.createExchange);
// Get all avalaible exchange
routes.get('/', ExchangeController.getAllAvalaibleExchange);
// Desactivate exchange by id
routes.put('/:id', ExchangeController.desactivateExchange)

export default routes;