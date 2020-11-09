import React, { useState, useCallback } from 'react';
import styles from './styles.module.css';

export function Form({ buttonText, onChange, onSubmit }) {
  const [value, setValue] = useState('');

  const onSubmitForm = useCallback((event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  }, [onSubmit, value]);

  const changeInput = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const showInputText = useCallback(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <form className={styles.container} onChange={showInputText} onSubmit={onSubmitForm}>
      <input className={styles.input} value={value} onInput={changeInput} />
      <button className={styles.button}>{buttonText}</button>
    </form>
  );
}
