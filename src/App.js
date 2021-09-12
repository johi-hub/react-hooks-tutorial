import React, {useState} from "react";

function expensiveInitialState () {
  return 10;
}

const App = () => {
  useState(() => expensiveInitialState());
  return <div>hey</div>;
}

export default App;
