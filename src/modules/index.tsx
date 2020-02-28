//리듀서를 하나만 사용해야 하는데
//combineReducers 라는 유틸 함수를 사용하여 쉽게 처리가능
import { combineReducers } from "redux";
import counters from "./counters";
import todos from "./todos";

const rootReducer = combineReducers({
  counters,
  todos
});

// 루트 리듀서를 내보내준다.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해준다.
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내준다.
export type RootState = ReturnType<typeof rootReducer>;
