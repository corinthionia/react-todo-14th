import styled from 'styled-components';

const ListSection = styled.section`
  height: 40%;

  border-bottom: 1px solid lightgrey;

  & + & {
    border: none;
  }
`;

const ItemList = ({ title, list }) => {
  return (
    <ListSection>
      <h4>{title}</h4>
      {list.map((item, i) => (
        <div key={i}>{item.text}</div>
      ))}
    </ListSection>
  );
};

export default ItemList;
