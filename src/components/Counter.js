import { useState } from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment } from "../Redux/Counter/Action";

export default function Counter() {
  const distpatch = useDispatch()
  const handleIncreament = (value) => {
    distpatch(Increment(value))
  }
  const handleDecrement = (value) => {
    distpatch(Decrement(value))
  }
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={handleIncreament}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}