import React from 'react';
import Link from 'next/link';

import styles from '../styles/components/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/customers">
          Clientes
        </Link>

        <Link href="/products">
          Produtos
        </Link>

        <Link href="/orders">
          Pedidos
        </Link>
      </nav>
    </header>
  );
}

export default Header;