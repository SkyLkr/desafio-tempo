import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';

import { useFetch } from '../../hooks/useFetch';

import { Customer } from '../../@types/Customer';

import styles from '../../styles/pages/Customers.module.css';

export default function Customers() {
  const { data: customers } = useFetch<Customer[]>('customers');

  return (
    <div className={styles.container}>
      <Head>
        <title>Listagem de clientes</title>
      </Head>

      <Header />

      <PageTitle>Clientes</PageTitle>

      <main className={styles.mainContent}>
        <div className={styles.addCustomer}>
          <Link href="/customers/create">
            <a>
              <Button
                title="Novo cliente"
                buttonStyle="primary"
              />
            </a>
          </Link>
        </div>

        {customers?.length !== 0 ? (
          <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
            </tr>
          </thead>

          <tbody>
            {customers?.map(customer => (
              <tr key={customer.uid}>
                <td>{customer.uid}</td>
                <td>{customer.fullName}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.birthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ) : (
          <p className={styles.noRecordsFound}>Nenhum cliente cadastrado.</p>
        )}
      </main>
    </div>
  );
}
