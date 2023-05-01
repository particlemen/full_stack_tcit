import React, {useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { 
  addPosts,
  selectPosts
} from './features/postsTable/postsTableSlice';
import { PostTable } from "./features/postsTable/postsTable"
import './App.css';

function App() {

  const postList = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      axios.get("http://localhost:3001/posts/getAllPosts")
      .then( (res) => {
        dispatch(addPosts(res.data));
      })
      .catch( (err) => {
        console.log(err)
      });
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <PostTable postList = {postList}/>
      </header>
    </div>
  );
}

export default App;
