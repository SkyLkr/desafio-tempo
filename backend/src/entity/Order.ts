import { BaseEntity, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Customer } from './Customer';
import { OrderProducts } from './OrderProducts';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => OrderProducts, orderProducts => orderProducts.order)
  @JoinColumn()
  orderProducts: OrderProducts[];

  @ManyToOne(() => Customer, user => user.orders)
  @JoinColumn()
  customer: Customer;
}