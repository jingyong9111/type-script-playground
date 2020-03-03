import React, { useEffect } from "react";
import useSample from "../hooks/useSample";

const Sample = ({ loadingPost, loadingUsers, users, post }: any) => {
  const { state } = useSample();
  // console.log("state", state);

  // useEffect(() => {
  //   onGetPost(1);
  //   onGetUsers();
  // }, [onGetPost, onGetUsers]);

  // console.log("이거", post);
  return (
    <>
      <section>
        <h1>포스터</h1>
        {loadingPost && "로딩.. 중"}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <h1>사용자 목록</h1>
      {loadingUsers && "로딩 중..."}
      {loadingUsers && users && (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.username}
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sample;
