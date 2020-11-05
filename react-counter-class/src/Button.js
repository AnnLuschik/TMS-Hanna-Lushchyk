import React from 'react';
import './Button.css'

function Button({ role, onClick, children }) {

	return (
		<button className={'button center ' + role} onClick={onClick}>{children}</button>
	);
}

export default Button;