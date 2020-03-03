import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { RootState } from "../modules";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}: any) => {
  useEffect(() => {
    // console.log(getPost(2));
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample }: RootState) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
