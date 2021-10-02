import ListForm from './ListForm';

const ItemList = ({ items, deleteTodo, toggleTodo }) => {
  const todoList = items.filter((todoObj) => todoObj.isDone === false);
  const doneList = items.filter((todoObj) => todoObj.isDone === true);

  return (
    <>
      <ListForm
        items={todoList}
        title={`🌴 TODO (${todoList.length})`}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <ListForm
        items={doneList}
        title={`💐 DONE (${doneList.length})`}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default ItemList;
