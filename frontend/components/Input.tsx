import React, { InputHTMLAttributes } from 'react';

import styles from '../styles/components/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input className={styles.input} {...props} />
  );
}

export default Input;