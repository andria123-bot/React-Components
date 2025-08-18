import { useEffect, useState } from "react";

const useEffect2 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Re-Rendered")
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default useEffect2;