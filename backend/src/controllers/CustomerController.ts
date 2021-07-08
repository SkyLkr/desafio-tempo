import { debug } from 'debug';
import { Request, Response } from 'express';
import { Customer } from '../entity/Customer';

const log = debug('api:controllers:customer');

export default class CustomerController {
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