import Head from 'next/head';
import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PageTitle from '../../components/PageTitle';

import styles from '../../styles/pages/CreateOrder.module.css';

const CreateProduct: React.FC = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar pedido</title>
      </Head>

      <Header />

      <PageTitle>Cadastrar pedido</PageTitle>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <Input
            placeholder="Buscar cliente"
          />

          <Input
            placeholder="Buscar produtos"
          />

          <ul className={styles.productsList}>
            <li>
              <div className={styles.productItem}>
                <span className={styles.productInfo}>Produto 1</span>
                <span className={styles.productInfo}>R$ 1,00</span>
                <span className={styles.productInfo}>x2</span>

                <button className={styles.addButton}>
                  <MdAdd />
                </button>

                <button className={styles.rmButton}>
                  <MdRemove />
                </button>
              </div>
            </li>
            <li>
              <div className={styles.productItem}>
                <span className={styles.productInfo}>Produto 1</span>
                <span className={styles.productInfo}>R$ 1,00</span>
                <span className={styles.productInfo}>x2</span>

                <button className={styles.addButton}>
                  <MdAdd />
                </button>

                <button className={styles.rmButton}>
                  <MdRemove />
                </button>
              </div>
            </li>
            <li>
              <div className={styles.productItem}>
                <span className={styles.productInfo}>Produto 1</span>
                <span className={styles.productInfo}>R$ 1,00</span>
                <span className={styles.productInfo}>x2</span>

                <button className={styles.addButton}>
                  <MdAdd />
                </button>

                <button className={styles.rmButton}>
                  <MdRemove />
                </button>
              </div>
            </li>
          </ul>

          <p className={styles.orderValue}>Valor total do pedido: R$ 0,00</p>
        </div>

        <Button title="Salvar" buttonStyle="primary" type="submit" />
      </form>
    </div>
  );
}

export default CreateProduct;