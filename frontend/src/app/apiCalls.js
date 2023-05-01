import { axios } from 'axios';

export const getAllPosts = async () => {
  return await axios.get("localhost:3001/posts/getAllPosts")
}