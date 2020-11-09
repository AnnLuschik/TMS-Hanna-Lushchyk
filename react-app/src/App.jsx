import React, { useState, useCallback } from 'react';
import {
  Form, BoxContainer, Box, store,
} from './components';

export function App() {
  const [buttonText, setButtonText] = useState('Find');
  const [filteredData, setFilteredData] = useState(store);

  const showFilteredData = useCallback((text) => {
    setFilteredData(store.filter((item) => item.includes(text)));

    if (filteredData.length) {
      setButtonText('Find');
    } else {
      setButtonText('Add');
    }
  }, [filteredData]);

  const addBoxFromInput = useCallback((word) => {
    store.push(word);
    setFilteredData(store);
  }, []);

  return (
    <div>
      <Form buttonText={buttonText} onChange={showFilteredData} onSubmit={addBoxFromInput} />
      <BoxContainer>
        {
          filteredData.map((item) => <Box key={item}>{item}</Box>)
        }
      </BoxContainer>
    </div>
  );
}
