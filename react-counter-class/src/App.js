import './App.css';
import React, { useState } from 'react';


function Counter({ value }) {
	return (
		<div className='counter center'>{value}</div>
	);
}

function App() {
	const [value, setValue] = useState(0);

	return (
		<div className='container'>
			<Counter value={value} />

			<div className='buttons-panel'>

				<button className='button increment center' onClick={() => {
					setValue(value + 1)
				}}>+</button>

				<button className='button reset center' onClick={() => {
					setValue(0)
				}}>&#10227;</button>

				<button className='button decrement center' onClick={() => {
					setValue(value - 1)
				}}>–</button>
			</div>
		</div>
	);
}

export default App;
