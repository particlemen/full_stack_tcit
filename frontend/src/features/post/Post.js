import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  deletePost
} from '../postsTable/postsTableSlice';
import axios from 'axios';

export function Post({ name, description, id }) {

  const dispatch = useDispatch();


  const deletePostFromTable = (postId) => {
    axios.post("http://localhost:3001/posts/deletePost", {id: postId})
    .then( (res) => {
      if (res.data.success) {
        dispatch(deletePost(postId));
      }
    })
    .catch( (err) => {
      console.log(err);
    })

  } 

  return(
    <tr> 
      <td> {name} </td>
      <td> {description} </td>
      <td>
        <button
            className="delete"
            aria-label="Delete Post"
            onClick={() => deletePostFromTable(id)}
        >
        Delete
        </button>
      </td>
    </tr>
  );
}