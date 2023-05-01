import React from "react";
import { Post } from "../post/Post";
import { Search } from "../searchComponent/Search";
import { NewPost } from "../newPost/NewPost";
import { useSelector } from 'react-redux';
import { 
  selectSearchKeyWord
} from './postsTableSlice';


export function PostTable({ postList }) {

  const searchFilter = useSelector(selectSearchKeyWord);
  let posts;
  
  if(searchFilter !== ""){
    posts = postList.filter( ({ name }) => name.includes(searchFilter) ).map((post, index) => (
      <Post id={post.id} name={post.name} description={post.description} key={index} />
    ));
  }
  else {
    posts = postList.map((post, index) => (
      <Post id={post.id} name={post.name} description={post.description} key={index} />
    ));  
  }

  return (
    <>
      <Search />
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Delete Post</th>
        </tr>
        <hl />
        {posts}
      </table>
      <NewPost />
    </>
  );
}
