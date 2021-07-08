import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import styles from '../../styles/pages/CreateCustomer.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateCustomer: React.FC = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar cliente</title>
      </Head>

      <Header />

      <PageTitle>Cadastrar cliente</PageTitle>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <Input
            placeholder="Nome do cliente"
          />

          <Input
            placeholder="Telefone"
          />

          <Input
            placeholder="Data de nascimento"
          />
        </div>

        <Button title="Salvar" buttonStyle="primary" type="submit" />
      </form>
    </div>
  );
}

export default CreateCustomer;