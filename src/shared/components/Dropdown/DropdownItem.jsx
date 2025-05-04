import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.pastelSeagull : theme.colors.neutralTextDefault};

  ${({ theme }) => theme.typography.light12};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurfacePoint};
  }
`;

const ItemLabel = styled.span`
  display: inline-block;
  width: 72px;
`;

export default function DropdownItem({ item, onClick, action, isSelected }) {
  return (
    <ItemWrapper isSelected={isSelected} onClick={() => onClick(item)}>
      <ItemLabel>{item.name}</ItemLabel>
      {action}
    </ItemWrapper>
  );
}
