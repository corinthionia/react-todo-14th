import { useState, useEffect } from 'react';
import Container from './Container';

const Item = () => {
  // items: 전체 할 일들을 저장
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  // todo: 입력한 할 일
  const [inputText, setInputText] = useState('');
  const [id, setId] = useState(0);

  const itemObj = {
    id: id,
    text: inputText,
    isDone: false,
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();

    const index = items.findIndex((todoObj) => todoObj.text === inputText);

    if (inputText && index === -1) {
      setItems(items.concat(itemObj));
    }

    setInputText('');
    setId(id + 1);
  };

  const deleteTodo = (id) => {
    setItems(items.filter((todoObj) => todoObj.id !== id));
  };

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
      deleteTodo={deleteTodo}
      items={items}
      setItems={setItems}
      toggleTodo={toggleTodo}
    />
  );
};

export default Item;
