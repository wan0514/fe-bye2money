import styled from '@emotion/styled';
import Driver from '../Driver';
import DropdownItem from './DropdownItem';

const DropdownContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.neutralSurfaceDefault};
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutralTextDefault};
`;

function Dropdown({ items, selectedItem, onSelect, onAdd, renderItemAction }) {
  const itemNodes = items.map((item) => (
    <DropdownItem
      key={item.id}
      item={item}
      isSelected={selectedItem?.id === item.id}
      onClick={onSelect}
      action={renderItemAction?.(item)}
    />
  ));

  if (onAdd) {
    itemNodes.push(
      <DropdownItem
        key="__add__"
        item={{ id: '__add__', name: '추가하기' }}
        isSelected={false}
        onClick={() => onAdd()}
      />
    );
  }

  const nodesWithDividers = itemNodes.flatMap((node, idx, arr) => {
    if (idx < arr.length - 1) {
      return [
        node,
        <Driver
          key={`div-${idx}`}
          orientation="horizontal"
          thickness={1}
          inset={24}
        />,
      ];
    }
    return [node];
  });

  return <DropdownContainer>{nodesWithDividers}</DropdownContainer>;
}

export default Dropdown;
