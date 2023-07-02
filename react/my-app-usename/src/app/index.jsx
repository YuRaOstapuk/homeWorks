
// Установите новое приложение с помощью npx create-react-app my-app-name
// Создайте input, 2 кнопки add и clear, пустой div
// Приложение должно работать следующим образом
//     Пишем в input любое слово
//     При нажатии на add слово появляется в div
//     При повторном написании в input и нажатии на add в div добавляется новое слово через дефис
//     При нажатии на clear надписи в div должны очищаться Для выполнения задания используйте хук useState

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
