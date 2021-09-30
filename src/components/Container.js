import styled from 'styled-components';
import { useState } from 'react';
import List from './List';

const TodoContainer = styled.div`
  width: 360px;
  height: 600px;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.header`
  height: 7.5%;

  font-size: 1.3rem;

  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;

  margin: 0;
`;

const InputFormWrapper = styled.form`
  height: 12.5%;

  display: flex;
  align-items: center;

  justify-content: space-around;

  border-bottom: solid 1px lightgrey;
`;

const Input = styled.input`
  height: 50%;
  width: 70%;

  padding-left: 0.75rem;

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
  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState({
    text: '',
    isDone: false,
  });

  // dummy data
  //   const todoItems = [
  //     { text: '안녕안녕', isDone: false },
  //     { text: 'hello', isDone: false },
  //     { text: 'hihihihihihi', isDone: false },
  //     { text: '우와', isDone: false },
  //     { text: '우와우와', isDone: false },
  //   ];

  return (
    <TodoContainer>
      <Title>💌 투두리스트</Title>
      <InputFormWrapper>
        <Input />
        <AddTodoBtn onClick={handleAddTodo}>➕</AddTodoBtn>
      </InputFormWrapper>
      <List title={'TODO'} list={todoItems} />
      <List title={'DONE'} list={todoItems} />
    </TodoContainer>
  );
};

export default Container;
