import React, { useState, useEffect, useCallback } from 'react';
import TodoForm from './TodoForm';

// 할 일들을 관리(추가/삭제/토글)하는 컴포넌트
const TodoItems = () => {
  // items: 전체 할 일들을 저장
  const [items, setItems] = useState([]);

  // inputText: 입력한 할 일
  const [inputText, setInputText] = useState('');

  // 인풋 필드에 입력한 값으로 inputText를 변경
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // items 배열에 입력한 할 일을 추가
  const addNewTodo = useCallback(
    (e) => {
      e.preventDefault();

      // 중복 검사를 위한 findIndex
      const indexOfDuplicates = items.findIndex(
        (todo) => todo.text === inputText
      );

      // 중복, 공백 입력이 아니면 객체 형태로 만들어 items에 저장
      if (inputText && indexOfDuplicates === -1) {
        const todoItem = {
          text: inputText,
          isDone: false,
        };

        setItems(items.concat(todoItem));
      }

      setInputText('');
    },
    [inputText, items]
  );

  // items 배열에서 할 일 삭제
  const deleteTodo = useCallback(
    (text) => {
      setItems(items.filter((todo) => todo.text !== text));
    },
    [items]
  );

  // 할 일의 isDone을 반전
  const toggleTodo = useCallback(
    (text) => {
      setItems(
        items.map((todo) =>
          todo.text === text ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    },
    [items]
  );

  // local storage에 저장된 할 일 불러오기
  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  // local storage에 items 저장하기
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  return (
    <TodoForm
      todo={inputText}
      items={items}
      handleInputChange={handleInputChange}
      addNewTodo={addNewTodo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  );
};

export default React.memo(TodoItems);
