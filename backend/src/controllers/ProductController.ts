import { debug } from 'debug';
import { Request, Response } from 'express';

import { Product } from '../entity/Product';

const log = debug('api:controllers:product');

export default class ProductController {
  static async create(request: Request, response: Response) {
    const { name, price } = request.body;

    try {
      const product = Product.create({ name, price });

      await product.save();

      return response.status(201).send();
    } catch(error) {
      log(error);
      return response.status(400).send();
    }
  }
}