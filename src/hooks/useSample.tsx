import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import sample, { getPost, getUsers } from "../modules/sample";
import { useCallback } from "react";

export default function useSample() {
  const state = useSelector((sample: RootState) => ({
    post: sample.post,
    users: sample.users
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS
  }));
  const post = useSelector((state: RootState) => ({
    post: state.post
  }));
  const dispatch = useDispatch();
  const onGetPost = useCallback((id: number) => dispatch(getPost(id)), [
    dispatch
  ]);
  const onGetUsers = useCallback(() => dispatch(getUsers()), [dispatch]);
  return {
    state,
    post,
    onGetPost,
    onGetUsers
  };
}
