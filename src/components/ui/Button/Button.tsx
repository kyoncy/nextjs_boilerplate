import React from 'react';

import styles from './Button.module.css';

export type ButtonProps = {
  /**
   * ボタンのサイズ
   * @default m
   */
  size?: 'm' | 'l';
  /**
   * ボタン内に表示する内容
   */
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.VFC<ButtonProps> = ({
  size = 'm',
  children,
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={`${styles.button} ${styles[`button-${size}`]}`}
  >
    {children}
  </button>
);
