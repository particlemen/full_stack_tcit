import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { 
  updateSearchKeyWord
} from '../postsTable/postsTableSlice';
import styles from '../counter/Counter.module.css';

export function Search() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <input
        aria-label="Key word to search within a post"
        onChange={(e) => setSearchKeyWord(e.target.value.trim())}
        value={searchKeyWord}
      />
      <button
        aria-label="Do the search"
        onClick={() => dispatch(updateSearchKeyWord(searchKeyWord.trim()))}
      >
      Search  
      </button>
    </div>
  );
}
