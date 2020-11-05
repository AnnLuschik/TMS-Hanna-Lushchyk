import React from 'react';
import styles from './Button.module.css';



function Button({ role, onClick, children }) {

	return (
		<button className={`${styles.button} ${styles.center} ${role}`} onClick={onClick}>{children}</button>
	);
}

export default Button;