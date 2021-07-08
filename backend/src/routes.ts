import { Router } from 'express';
import CustomerController from './controllers/CustomerController';
import OrderController from './controllers/OrderController';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);

routes.post('/orders', OrderController.create);

export default routes;