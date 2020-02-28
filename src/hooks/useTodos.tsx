// 기존의 concat 함수 역할을 useSelector 함수로 가능하다.
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
}