import styled from 'styled-components';

const ListSection = styled.section`
  height: 40%;

  border-bottom: 1px solid lightgrey;
  & + & {
    border: none;
  }
`;

const ListTitle = styled.div`
  font-size: 1.25rem;

  display: flex;
  align-items: center;

  margin: 0;
  padding: 0.75rem;
`;

const ListItemWrapper = styled.div`
  height: 9rem;

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

const ListItem = styled.div`
  margin: 0;
  padding: 0.75rem;
`;

const ItemList = ({ title, list }) => {
  return (
    <ListSection>
      <ListTitle>{title}</ListTitle>
      <ListItemWrapper>
        {list.map((item, i) => (
          <ListItem key={i}>{item.text}</ListItem>
        ))}
      </ListItemWrapper>
    </ListSection>
  );
};

export default ItemList;
