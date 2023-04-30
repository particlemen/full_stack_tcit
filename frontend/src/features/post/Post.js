import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';




export function Post({ name, description, id }) {

  const deletePost = (postId) => {
    console.log(postId)
  } 

  return(
    <tr> 
      <td> {name} </td>
      <td> {description} </td>
      <td>
        <button
            className="delete"
            aria-label="Delete Post"
            onClick={() => deletePost(id)}
        >
        Delete
        </button>
      </td>
    </tr>
  );
}