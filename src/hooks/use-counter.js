import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCounter] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const increment = () => {
    setCounter(count + 1);
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
