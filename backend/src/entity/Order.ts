import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './Product';
import { Customer } from './Customer';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  dateTime: Date;

  @ManyToMany(() => Product)
  items: Product[];

  @ManyToOne(() => Customer, user => user.orders)
  @JoinColumn()
  customer: Customer;
}