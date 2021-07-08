import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import styles from '../../styles/pages/CreateCustomer.module.css';

const CreateCustomer: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await api.post('customers', { fullName, phoneNumber, birthDate });

      router.push('/customers');
    } catch (error) {
      console.error(error);
    }
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
            placeholder="Nome completo do cliente"
            value={fullName}
            onChange={event => setFullName(event.target.value)}
          />

          <Input
            placeholder="Telefone"
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
          />

          <Input
            placeholder="Data de nascimento"
            type="date"
            value={birthDate}
            onChange={event => setBirthDate(event.target.value)}
          />
        </div>

        <Button title="Salvar" buttonStyle="primary" type="submit" />
      </form>
    </div>
  );
}

export default CreateCustomer;