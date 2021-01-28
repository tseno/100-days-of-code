import React, { useState, useCallback, memo, useEffect } from "react";

const Button = memo(({ id, onClick }) => {
  useEffect(() => {
    console.log(`render ${id}`);
  });
  return <button onClick={onClick}>{id}</button>;
});

function App() {
  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2((count) => count + 1), []);
  return (
    <div>
      <p>{count1}</p>
      <Button id={"Increment1"} onClick={increment1} />
      <p>{count2}</p>
      <Button id={"Increment2"} onClick={increment2} />
    </div>
  );
}

export default App;
