import React from "react";
import { Post } from "../post/Post";
import { Search } from "../searchComponent/Search";
import { NewPost } from "../newPost/NewPost";
import { useSelector } from "react-redux";
import { selectSearchKeyWord } from "./postsTableSlice";

export function PostTable({ postList }) {
  const searchFilter = useSelector(selectSearchKeyWord);
  let posts;

  if (searchFilter !== "") {
    posts = postList
      .filter(({ name }) => name.includes(searchFilter))
      .map((post, index) => (
        <Post
          id={post.id}
          name={post.name}
          description={post.description}
          key={index}
        />
      ));
  } else {
    posts = postList.map((post, index) => (
      <Post
        id={post.id}
        name={post.name}
        description={post.description}
        key={index}
      />
    ));
  }

  const nonPostsAlert = searchFilter !== ""?<p>No posts found with a name that contains <i>{searchFilter}</i></p>:<p>No posts in the database</p>

  return (
    <>
      <Search key="perro" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Delete Post</th>
          </tr>
        </thead>
        {
          posts.length > 0? <tbody>{posts}</tbody> : nonPostsAlert
        }
      </table>
      <NewPost />
    </>
  );
}
