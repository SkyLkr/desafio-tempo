import { Router } from 'express';
import CustomerController from './controllers/CustomerController';

const routes = Router();

routes.post('/customers', CustomerController.create);

export default routes;