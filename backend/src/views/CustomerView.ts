import { Customer } from '../entity/Customer';

export default class CustomerView {
  static render(customer: Customer) {
    const {
      uid,
      fullName,
      phoneNumber,
      birthDate,
      orders
    } = customer;

    return {
      uid,
      fullName,
      phoneNumber,
      birthDate,
      orders
    }
  }

  static renderMany(customers: Customer[]) {
    return customers.map(customer => this.render(customer));
  }
}