import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { 
  addPosts
} from '../postsTable/postsTableSlice';
import axios from 'axios';
import styles from '../counter/Counter.module.css';

export const NewPost = () => {

  const dispatch = useDispatch(); 

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const newPost = (name, description) => {
    axios.post("http://localhost:3001/posts/newPost", {name: name, description: description})
    .then((res) => {
      dispatch(addPosts([res.data]));
    })
    .catch((err) => console.log(err))
  };

  return(
    <div className={styles.row}>
      <input 
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Description"
      />
      <button
        onClick={() => newPost(newName, newDescription)}
      >
        Add new post
      </button>
    </div>
  );
}