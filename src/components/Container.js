import styled from 'styled-components';
// import { useState } from 'react';
import ItemList from './ItemList';

const TodoContainer = styled.div`
  width: 360px;
  height: 600px;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h4`
  height: 7.5%;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  margin: 0;
`;

const InputBox = styled.form`
  height: 12.5%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: solid 1px lightgrey;
`;

const Input = styled.input`
  height: 50%;
  width: 70%;

  border-radius: 15px;
  border: solid 1px lightgrey;

  &:focus {
    outline: none;
  }
`;

const AddTodoBtn = styled.button`
  height: 2rem;
  width: 2rem;

  margin: 1%;

  border: none;
  border-radius: 10px;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const Container = ({ handleAddTodo }) => {
  //const [todoItems, setTodoItems] = useState([]);

  // dummy data
  const todoItems = [
    { text: '안녕안녕', isDone: false },
    { text: 'hello', isDone: false },
    { text: 'hihihihihihi', isDone: false },
  ];

  return (
    <TodoContainer>
      <Title>💌 투두리스트</Title>
      <InputBox>
        <Input />
        <AddTodoBtn onClick={handleAddTodo}>➕</AddTodoBtn>
      </InputBox>
      <ItemList title={'TODO'} list={todoItems} />
      <ItemList title={'DONE'} list={todoItems} />
    </TodoContainer>
  );
};

export default Container;
