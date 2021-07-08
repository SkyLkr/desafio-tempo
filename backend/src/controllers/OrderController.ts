import { debug } from 'debug';
import { Request, Response } from 'express';
import { SimpleConsoleLogger } from 'typeorm';
import { Customer } from '../entity/Customer';
import { Order } from '../entity/Order';
import { OrderProducts } from '../entity/OrderProducts';
import { Product } from '../entity/Product';

const log = debug('api:controllers:order')

export default class OrderController {
  static async create(request: Request, response: Response) {
    const {
      customerId,
      productIds,
    } = request.body;

    try {
      const customer = await Customer.findOne(customerId);

      if (!customer) {
        return response.status(404).send();
      }

      const products = await Promise.all<Product>(productIds.map(product => Product.findOne(product.id)));

      if (products.some(product => !product)) {
        return response.status(404).send();
      }

      const order = Order.create({
        customer,
      });

      const orderProducts = products.map(product => OrderProducts.create({
        product,
        ammount: productIds.find(item => item.id === product.uid).ammount
      }));

      await OrderProducts.save(orderProducts);
      
      order.orderProducts = orderProducts;

      await order.save();

      orderProducts.forEach(orderProduct => {
        orderProduct.order = order;
      })

      await OrderProducts.save(orderProducts);

      return response.status(201).send();
    } catch (error) {
      log(error);
      return response.status(400).send();
    }
  }
}