import React from 'react';
import ListForm from './ListForm';

const ItemList = ({ items, deleteTodo, toggleTodo }) => {
  const todoList = items.filter((todoObj) => todoObj.isDone === false);
  const doneList = items.filter((todoObj) => todoObj.isDone === true);

  const list = [
    { item: todoList, title: `🌴 TODO (${todoList.length})` },
    { item: doneList, title: `💐 DONE (${doneList.length})` },
  ];

  return (
    <>
      {list.map((list, index) => (
        <ListForm
          key={index}
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
