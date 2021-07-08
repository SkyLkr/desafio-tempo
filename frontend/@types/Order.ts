import { Customer } from './Customer';
import { Product } from './Product';

export class Order {
  uid!: string;
  dateTime!: Date;
  items!: Product[];
  customer!: Customer;
}