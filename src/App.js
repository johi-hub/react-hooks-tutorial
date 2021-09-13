import React, {useState} from "react";

const App = () => {
  const [{count, count2 }, setCount] = useState({count: 10, count2: 20 });

  return (
  <div>
    <button onClick={() => setCount(currentCount => currentCount + 1)}>
      +
      </button>
      <div>
      count: 1 {count}
    </div>
    <div>
      count 2: {count2}
    </div>
  </div>
  );
};

export default App;
