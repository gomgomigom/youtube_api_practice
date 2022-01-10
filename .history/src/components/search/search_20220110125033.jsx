import React, { useRef } from 'react';
import styles from './search.module.css';

const Search = ({ onSearch, onLogoClick }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
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
      <div className={styles.logo_container} onClick={onLogoClick}>
        <img className={styles.logo} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.search_input}
        ref={inputRef}
        type='search'
        placeholder='검색'
        onKeyPress={onKeyPress}
      />
      <button className={styles.search_button} type='submit' onClick={onClick}>
        <img
          className={styles.search_img}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </div>
  );
};
export default Search;
