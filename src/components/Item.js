import { useState } from 'react';
import Container from './Container';

const Item = () => {
  // items: 전체 할 일들을 저장
  const [items, setItems] = useState([]);

  // todo: 입력한 할 일
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();

    setItems(
      items.concat({
        id: id,
        text: todo,
        isDone: false,
      })
    );

    setTodo('');
    setId(id + 1);

    console.log(items);
  };

  const deleteTodo = (id) => {
    setItems(items.filter((todo) => todo.id !== id));
  };

  return (
    <Container
      todo={todo}
      handleChange={handleChange}
      addNewTodo={addNewTodo}
      deleteTodo={deleteTodo}
      items={items}
    />
  );
};

export default Item;
