import { debug } from 'debug';
import { Request, Response } from 'express';
import { FindManyOptions, Like } from 'typeorm';

import { Product } from '../entity/Product';
import ProductView from '../views/ProductView';

const log = debug('api:controllers:product');

export default class ProductController {
  static async index(request: Request, response: Response) {
    const { searchTerm } = request.query;

    try {
      const findConditions: FindManyOptions<Product> = searchTerm ?
      { where: { name: Like(`%${searchTerm}%`) } } :
      {};

      const products = await Product.find(findConditions);

      return response.json(ProductView.renderMany(products));
    } catch (error) {
      log(error);
      return response.status(400).send();
    }
  }

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