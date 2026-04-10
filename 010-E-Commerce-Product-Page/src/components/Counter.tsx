import { increment, decrement } from "../features/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import icon_plus from "../assets/icons/icon-plus.svg";
import icon_minus from "../assets/icons/icon-minus.svg";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 rounded-md w-full sm:w-32">
      <button
        onClick={() => dispatch(decrement())}
        className="p-2 hover:opacity-70"
      >
        <img src={icon_minus} alt="icon-minus" />
      </button>

      <span className="font-semibold">{count}</span>

      <button
        onClick={() => dispatch(increment())}
        className="p-2 hover:opacity-70"
      >
        <img src={icon_plus} alt="icon-plus" />
      </button>
    </div>
  );
}
