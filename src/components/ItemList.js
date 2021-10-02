import React from 'react';
import ListContainer from './ListContainer';

const ItemList = ({ items, deleteTodo, toggleTodo }) => {
  const todoList = items.filter((todoObj) => todoObj.isDone === false);
  const doneList = items.filter((todoObj) => todoObj.isDone === true);

  const list = [
    {
      id: 'todoListKey',
      item: todoList,
      title: `🌴 TODO (${todoList.length})`,
    },
    {
      id: 'doneListKey',
      item: doneList,
      title: `💐 DONE (${doneList.length})`,
    },
  ];

  return (
    <>
      {list.map((list) => (
        <ListContainer
          key={list.id}
          items={list.item}
          title={list.title}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </>
  );
};

export default React.memo(ItemList);
