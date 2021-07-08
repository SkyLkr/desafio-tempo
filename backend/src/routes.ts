import { Router } from 'express';
import CustomerController from './controllers/CustomerController';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.create);

routes.post('/products', ProductController.create);

export default routes;