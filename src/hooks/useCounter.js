import { useState } from "react";

export const useCounter = (init= 0) => {
    const [count, setCount] = useState(init);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return { count, increment, decrement };
  };