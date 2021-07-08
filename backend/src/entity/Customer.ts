import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from './Order';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDate: Date;

  @OneToMany(() => Order, order => order.customer)
  orders: Order[];
}