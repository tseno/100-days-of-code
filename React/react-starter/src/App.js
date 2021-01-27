import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>click</button>
    </div>
  );
}

export default App;
