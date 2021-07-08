import Head from 'next/head'

import Header from '../components/Header'
import PageTitle from '../components/PageTitle'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Listagem de clientes</title>
      </Head>

      <Header />

      <PageTitle>Clientes</PageTitle>

      <main className={styles.mainContent}>

      </main>
    </div>
  )
}
