/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Counter.module.css';

function Counter({ value }) {
  return (
    <div className={`${styles.counter} ${styles.center}`}>{value}</div>
  );
}

export default Counter;
