import { debug } from 'debug';
import { Request, Response } from 'express';
import { FindManyOptions, Like } from 'typeorm';
import { Customer } from '../entity/Customer';
import CustomerView from '../views/CustomerView';

const log = debug('api:controllers:customer');

export default class CustomerController {
  static async index(request: Request, response: Response) {
    const { searchTerm } = request.query;

    try {
      const findConditions: FindManyOptions<Customer> = searchTerm ?
      { where: { fullName: Like(`%${searchTerm}%`) } } :
      {};

      const customers = await Customer.find(findConditions);

      return response.json(CustomerView.renderMany(customers));
    } catch (error) {
      log(error);
      return response.status(400).send();
    }
  }

  static async create(request: Request, response: Response) {
    const { fullName, phoneNumber, birthDate } = request.body;

    try {
      const customer = Customer.create({ fullName, phoneNumber, birthDate });

      await customer.save();

      return response.status(201).send();
    } catch (error) {
      log(error);
      return response.status(400).send();
    }
  }
}