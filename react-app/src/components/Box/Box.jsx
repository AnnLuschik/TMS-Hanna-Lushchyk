import React from 'react';
import styles from './styles.module.css';

export function Box({ children }) {
  return <div className={styles.container}>{children}</div>;
}
