import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getPost, getUsers } from "../modules/sample";

export default function useSample() {
  const dispatch = useDispatch();
  // const onGetPost = useCallback((id: number) => dispatch(getPost(id)), [
  //   dispatch
  // ]);
  // // console.log(onGetPost(1));
  // const onGetUsers = useCallback(() => dispatch(getUsers()), [dispatch]);

  // useEffect(() => {
  //   onGetPost(1);
  //   onGetUsers();
  // }, [onGetPost, onGetUsers]);
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);

  const state = useSelector((sample: RootState) => ({
    post: sample.post,
    users: sample.users
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS
  }));
  // const post = useSelector((state: RootState) => state.post);

  return {
    state
  };
}
