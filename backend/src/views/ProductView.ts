import { Product } from '../entity/Product';

export default class ProductView {
  static render(product: Product) {
    const { uid, name, price } = product;

    return { uid, name, price };
  }

  static renderMany(products: Product[]) {
    return products.map(product => this.render(product));
  }
}