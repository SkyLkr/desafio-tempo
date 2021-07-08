import React from 'react';

import styles from '../styles/components/PageTitle.module.css'

const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
}

export default PageTitle;