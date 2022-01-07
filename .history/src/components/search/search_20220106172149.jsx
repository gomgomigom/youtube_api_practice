import React from 'react';
import styles from './search.module.css';

const Search = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src='' alt='' />
      <span>Youtube</span>
      <form action=''></form>
      <input type='search' placeholder='검색' />
      <button type='submit'></button>
    </div>
  );
};
export default Search;
