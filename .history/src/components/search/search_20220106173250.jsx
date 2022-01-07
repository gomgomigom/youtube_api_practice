import React from 'react';
import styles from './search.module.css';

const Search = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src='/images/logo.png' alt='' />
      <span>Youtube</span>
      <form action=''></form>
      <input type='search' placeholder='검색' />
      <button type='submit'>
        <img src='/images/search.png' alt='search' />
      </button>
    </div>
  );
};
export default Search;
