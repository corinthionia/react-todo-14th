import styled from 'styled-components';

const List = ({ title, items }) => {
  const reversedItems = [...items].reverse();

  return (
    <ListSection>
      <ListTitle>{title}</ListTitle>
      <ListWrapper>
        {reversedItems.map((item, i) => (
          <ListItemWrapper key={i}>
            <ListItem>{item.text}</ListItem>
            <DeleteBtn>❌</DeleteBtn>
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
  color: yellowgreen;

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
  margin: 1rem 1rem 1rem 0;
`;

const ListItem = styled.span`
  margin: 0;
  padding: 0.75rem;
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

export default List;
