// Установите новое приложение с помощью npx create-react-app my-app-name
// Создайте input, 2 кнопки add и clear, пустой div
// Приложение должно работать следующим образом
//     Пишем в input любое слово
//     При нажатии на add слово появляется в div
//     При повторном написании в input и нажатии на add в div добавляется новое слово через дефис
//     При нажатии на clear надписи в div должны очищаться Для выполнения задания используйте хук useState

import React, { useRef, useState } from "react";
//первая версия задачи , неправильно сделана ! при записи в инпут сразу идет запись в div , и при нажатии на add слова множаться
// function App() {
//   const [words, setWords] = useState(" ");

//   const handleAdd = () => {
//     setWords((prevWords) => (prevWords ? `${prevWords}-${words}` : words));
//   };

//   const handleClear = () => {
//     setWords(" ");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={words}
//         onChange={(e) => setWords(e.target.value)}
//       />
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleClear}>Clear</button>
//       <div>{words}</div>
//     </div>
//   );
// }

function App() {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState([]);
  const [isBlurActive, setIsBlurActive] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); //обновление значения ввода
  };

  const handleAddClick = () => {
    //эта функция добавляет слово в список вводимых слов и обнуляет значение ввода
    if (inputValue.trim() !== "") {
      setWords((prevWords) => [...prevWords, inputValue]);
      setInputValue("");
    }
  };

  const handleClearClick = () => {
    setWords([]); //очищает значение поля ввода
  };

  const handleCheckBoxChange = () => {
    setIsBlurActive((prevIsBlurActive) => !prevIsBlurActive);
    if (setIsBlurActive) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
      <div>
        {words.map(
          (
            word,
            index //с помощью метода map преобразовываем каждый элемент массива в JSX компонент , создавая каждому слову массива span
          ) => (
            <span key={index}>{index === 0 ? word : "-" + word}</span> //Проверяем индекс элемента и добавляем '-' все кроме 0 элемента массива
          )
        )}
      </div>

      <label>
        <input
          type="checkbox"
          checked={isBlurActive}
          onChange={handleCheckBoxChange}
        />
      </label>
    </div>
  );
}

export default App;
