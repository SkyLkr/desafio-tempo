import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

// import { Container } from './styles';

const Orders: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Listagem de pedidos</title>
      </Head>

      <Header />
    </div>
  );
}

export default Orders;