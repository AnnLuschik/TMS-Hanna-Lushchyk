import React from 'react';
import './Counter.css'

export function Counter({ value }) {
	return (
		<div className='counter center'>{value}</div>
	);
}

export default Counter;