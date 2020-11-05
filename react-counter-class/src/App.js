import './App.css';
import React, { useState } from 'react';
import Button from './Button'
import Counter from './Counter'


function App() {
	const [value, setValue] = useState(0);

	return (
		<div className='container'>
			<Counter value={value} />

			<div className='buttons-panel'>

				<Button role='increment' onClick={() => setValue(value + 1)}>+</Button>

				<Button role='reset' onClick={() => setValue(0)}>&#10227;</Button>

				<Button role='decrement' onClick={() => setValue(value - 1)}>–</Button>
			</div>
		</div>
	);
}

export default App;
