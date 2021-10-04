import React from 'react';
import ListWrapper from './ListWrapper';

const ItemList = ({ todoList, doneList, deleteTodo, toggleTodo }) => {
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
        <ListWrapper
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
