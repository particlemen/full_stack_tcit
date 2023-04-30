import React, { useState } from "react";

export function Search() {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  return (
    <>
      <input
        aria-label="Key word to search within a post"
        onChange={(e) => setSearchKeyWord(e.target.value)}
        value={searchKeyWord}
      />
      <button
        aria-label="Do the search"
        onClick={() => 1+1}
      >
      Search  
      </button>
    </>
  );
}
