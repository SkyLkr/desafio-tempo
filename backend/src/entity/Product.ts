import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProducts } from './OrderProducts';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @OneToMany(() => OrderProducts, orderProducts => orderProducts.product)
  @JoinColumn()
  orderProducts: OrderProducts[];
}