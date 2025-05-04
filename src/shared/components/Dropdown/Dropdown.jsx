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
  const itemNodes = items.flatMap((item, idx, arr) => {
    const node = (
      <DropdownItem
        key={item.id}
        item={item}
        isSelected={selectedItem?.id === item.id}
        onClick={() => onSelect(item)}
        action={renderItemAction?.(item)}
      />
    );

    return idx < arr.length - 1
      ? [node, <Driver key={`div-${item.id}`} inset={24} />]
      : [node];
  });

  return (
    <DropdownContainer>
      {itemNodes}

      {onAdd && (
        <>
          {items.length > 0 && <Driver key="div-add" inset={24} />}

          <DropdownItem
            key="__add__"
            item={{ id: '__add__', name: '추가하기' }}
            isSelected={false}
            onClick={onAdd}
          />
        </>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
