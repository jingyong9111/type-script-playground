import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counters";
import { increaseAsync } from "../modules/counterAsync";
import { useCallback } from "react";

export default function useCounter() {
  const count = useSelector((state: RootState) => state.counters.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );
  const onIncreaseAsync = useCallback(() => dispatch(increaseAsync()), [
    dispatch
  ]);

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onIncreaseAsync
  };
}
