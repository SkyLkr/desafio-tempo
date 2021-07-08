import React from 'react';

import styles from '../styles/components/Button.module.css';

interface ButtonProps {
  title: string;
  buttonStyle: 'primary' | 'secondary',
  type?: 'button' | 'submit',
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({title, buttonStyle, type="button", onClick}) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]}`}
      title={title}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;