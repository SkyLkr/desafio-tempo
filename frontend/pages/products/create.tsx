import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import PageTitle from '../../components/PageTitle';

import api from '../../services/api';

import styles from '../../styles/pages/CreateProduct.module.css';

const CreateProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await api.post('products', { name, price: Number(price) });

      router.push('/products');
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar produto</title>
      </Head>

      <Header />

      <PageTitle>Cadastrar produto</PageTitle>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <Input
            placeholder="Nome do produto"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <Input
            placeholder="Preço"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </div>

        <Button title="Salvar" buttonStyle="primary" type="submit" />
      </form>
    </div>
  );
}

export default CreateProduct;