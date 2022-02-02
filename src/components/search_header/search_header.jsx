import styles from './search_header.module.css';
import React, { useRef } from 'react';


const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
       const value = inputRef.current.value;
       //console.log(value);
       onSearch(value);
    }

    const onClick = () => {
       handleSearch();
    };

    const onKeyPress = (event) => {
       if (event.key === 'Enter') {
           handleSearch();
       }
    };

    return (
        <header className={styles.header}>
            <img className={styles.img} src='/images/youtube.png' alt='logo' />
            <input className={styles.input} type="search" 
                   placeholder='검색'onKeyPress={onKeyPress} 
                   ref={inputRef}
            />
            <button className={styles.btn} type='submit' onClick={onClick}>
               <img src='/images/search.png' className={styles.sImage} alt='search'/>
            </button>
        </header>
    )
}

export default SearchHeader;