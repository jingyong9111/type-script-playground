import axios from "axios";

// 포스트 읽기
export const getPost = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

// 모든 사용자 정보 불러오기
export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);

  