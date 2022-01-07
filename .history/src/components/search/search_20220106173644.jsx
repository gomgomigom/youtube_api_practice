import React from 'react';
import styles from './search.module.css';

const Search = (props) => {
  const onClick = () => {
    console.log('onClick');
  };

  const onKeyPress = () => {
    console.log('onKeyPress');
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <span>Youtube</span>
      <form action=''></form>
      <input type='search' placeholder='검색' onKeyPress={onKeyPress} />
      <button type='submit' onClick={onClick}>
        <img src='/images/search.png' alt='search' />
      </button>
    </div>
  );
};
export default Search;
