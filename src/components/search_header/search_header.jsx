import styles from './search_header.module.css';
import React from 'react';


const SearchHeader = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src='/images/youtube.png' alt='logo' />
            <input className={styles.input} type="search" placeholder='검색'/>
            <button className={styles.btn} type='submit'>
               <img src='/images/search.png' className={styles.sImage} alt='search'/>
            </button>
        </header>
    )
}

export default SearchHeader;