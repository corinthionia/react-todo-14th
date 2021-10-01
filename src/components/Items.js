import { useState, useEffect } from 'react';
import Container from './Container';
import List from './List';

// 할 일들을 관리(추가/삭제/토글)하는 컴포넌트
const Items = () => {
  // items: 전체 할 일들을 저장
  const [items, setItems] = useState([]);

  // local storage에 저장된 할 일 불러오기
  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  // local storage에 items 저장하기
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  // inputText: 입력한 할 일
  const [inputText, setInputText] = useState('');
  const [id, setId] = useState(0);

  const itemObj = {
    id: id,
    text: inputText,
    isDone: false,
  };

  // 인풋 필드에 입력한 값으로 inputText를 변경
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // items 배열에 입력한 할 일을 추가
  const addNewTodo = (e) => {
    e.preventDefault();

    // 중복 검사
    const index = items.findIndex((todoObj) => todoObj.text === inputText);

    if (inputText && index === -1) {
      setItems(items.concat(itemObj));
    }

    setInputText('');
    setId(id + 1);
  };

  // items 배열에서 할 일 삭제
  const deleteTodo = (id) => {
    setItems(items.filter((todoObj) => todoObj.id !== id));
  };

  // 할 일의 isDone을 반전
  const toggleTodo = (id) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Container
      todo={inputText}
      handleChange={handleChange}
      addNewTodo={addNewTodo}
      List={
        <List items={items} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      }
    />
  );
};

export default Items;
