import styled from 'styled-components';

const ListForm = ({ items, title, deleteTodo, toggleTodo }) => {
  return (
    <ListSection>
      <ListTitle>{title}</ListTitle>
      <ListWrapper>
        {items.map((item, i) => (
          <ListItemWrapper key={i} isDone={item.isDone}>
            <ListItemText onClick={() => toggleTodo(item.text)}>
              {item.text}
            </ListItemText>
            <DeleteBtn onClick={() => deleteTodo(item.text)}>❌</DeleteBtn>

            {console.log(`${i} 번째 리스트 렌더링`)}
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </ListSection>
  );
};

const ListSection = styled.section`
  height: 40%;

  border-bottom: 1px solid lightgrey;

  & + & {
    border: none;
  }
`;

const ListTitle = styled.h3`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0.75rem;
`;

const ListWrapper = styled.div`
  height: 9rem;

  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    background-clip: padding-box;

    border-radius: 10px;
    border: 0.25rem solid transparent;
  }
`;

const ListItemWrapper = styled.div`
  height: 2rem;

  margin: 1rem 0 1rem 0;

  ${(item) => (item.isDone ? `opacity: 0.5;` : `opacity: 1.0;`)}

  &:hover {
    cursor: pointer;
  }
`;

const ListItemText = styled.span`
  margin: 0 1rem 0 1.25rem;
`;

const DeleteBtn = styled.button`
  margin: 0;
  padding: 0;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export default ListForm;
