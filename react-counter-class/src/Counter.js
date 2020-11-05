import React from 'react';
import styles from './Counter.module.css'

export function Counter({ value }) {
	return (
		<div className={`${styles.counter} ${styles.center}`}>{value}</div>
	);
}

export default Counter;