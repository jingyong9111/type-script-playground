// $ yarn add typesafe-actions

import createStandardAction, {
  ActionType,
  createReducer
} from "typesafe-actions";

import * as api from "../lib/api";

// 액션 타입 선언
// 한 요청당 세개를 만든다.
// 액션의 type 을 선언 할 때 기존에 as const 를 붙여줬었는데,
// typesafe-actions를 사용하시면 붙일 필요가 없다.

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURS = "sample/GET_POST_FAILURS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURS = "sample/GET_USERS_FAILURS";

// thunk 함수 생성
// thunk 함수 내부에서는
// 시작할 때,
// 성공했을 때,
// 실패했을 때
// 다른 액션을 디스패치함

export const getPost = (id: number) => async (dispatch: any) => {
  dispatch({ type: GET_POST }); // 요청 시작을 알림
  try {
    const res = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      plyload: res.data
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURS,
      payload: e,
      error: true
    }); // 에러
    throw e; // 컴포넌트단에서 에러를 조회할 수 있게 해준다.
  }
};

export const getUsers = () => async (dispatch: any) => {
  dispatch({ type: GET_USERS }); // 요청 시작을 알림
  try {
    const res = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      plyload: res.data
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURS,
      payload: e,
      error: true
    }); // 에러
    throw e; // 컴포넌트단에서 에러를 조회할 수 있게 해준다.
  }
};

type RequestAction = ActionType<typeof getPost> | ActionType<typeof getUsers>;

type RequstState = {
  loading: {
    GET_POST: boolean;
    GET_USERS: boolean;
  };
  post: null;
  users: null;
};

// 초기 상태 선언
// 요청의 로딩 중 상태는 loadong이라는 객체에서 관리

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
};

const sample = createReducer<RequstState, RequestAction>(initialState, {
  [GET_POST]: (state: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true // 요청 시작
    }
  }),
  [GET_POST_SUCCESS]: (state: any, action: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false // 요청 완료
    },
    post: action.payload
  }),
  [GET_POST_FAILURS]: (state: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false // 요청 완료
    }
  }),
  [GET_USERS]: (state: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true // 요청 시작
    }
  }),
  [GET_USERS_SUCCESS]: (state: any, action: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false // 요청 완료
    },
    post: action.payload
  }),
  [GET_USERS_FAILURS]: (state: any) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false // 요청 완료
    }
  })
});

export default sample;
