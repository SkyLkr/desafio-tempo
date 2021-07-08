import { Order } from './Order';

export class Customer {
  uid!: string;
  fullName!: string;
  phoneNumber!: string;
  birthDate!: Date;
  orders!: Order[];
}