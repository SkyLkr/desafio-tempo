import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';

import { useFetch } from '../../hooks/useFetch';

import { Product } from '../../@types/Product';

import styles from '../../styles/pages/Products.module.css';

export default function Products() {
  const { data: products } = useFetch<Product[]>('products');

  return (
    <div className={styles.container}>
      <Head>
        <title>Listagem de produtos</title>
      </Head>

      <Header />

      <PageTitle>Produtos</PageTitle>

      <main className={styles.mainContent}>
        <div className={styles.addProduct}>
          <Link href="/products/create">
            <a>
              <Button
                title="Novo produto"
                buttonStyle="primary"
              />
            </a>
          </Link>
        </div>

        {products?.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              {products?.map(product => (
                <tr key={product.uid}>
                  <td>{product.uid}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noRecordsFound}>Nenhum produto cadastrado.</p>
        )}

      </main>
    </div>
  );
}
