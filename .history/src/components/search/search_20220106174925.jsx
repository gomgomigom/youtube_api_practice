import React, { useRef } from 'react';
import styles from './search.module.css';

const Search = (props) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <span>Youtube</span>
      <form action=''></form>
      <input
        ref={inputRef}
        type='search'
        placeholder='검색'
        onKeyPress={onKeyPress}
      />
      <button type='submit' onClick={onClick}>
        <img src='/images/search.png' alt='search' />
      </button>
    </div>
  );
};
export default Search;
