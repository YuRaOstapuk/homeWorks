import React, { useState } from "react";

function App() {
  const [words, setWords] = useState(" ");

  const handleAdd = () => {
    setWords((prevWords) => (prevWords ? `${prevWords}-${words}` : words));
  };

  const handleClear = () => {
    setWords("");
  };

  return (
    <div>
      <input
        type="text"
        value={words}
        onChange={(e) => setWords(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <div>{words}</div>
    </div>
  );
}

export default App;
