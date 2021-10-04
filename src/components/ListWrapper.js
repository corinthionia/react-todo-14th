import styled from 'styled-components';

const ListWrapper = ({ items, title, deleteTodo, toggleTodo }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Wrapper>
        {items.map((item) => (
          <ListItemWrapper key={item.id} isDone={item.isDone}>
            <ListItemText onClick={() => toggleTodo(item.id)}>
              {item.text}
            </ListItemText>
            <DeleteBtn onClick={() => deleteTodo(item.id)}>❌</DeleteBtn>
          </ListItemWrapper>
        ))}
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 40%;

  border-bottom: 1px solid lightgrey;

  & + & {
    border: none;
  }
`;

const Title = styled.h3`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0.75rem;
`;

const Wrapper = styled.div`
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

  margin: 1rem 0;

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

export default ListWrapper;
