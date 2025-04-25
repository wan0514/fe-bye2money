import styled from '@emotion/styled';

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  ${({ theme }) => theme.typography.light14};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurfacePoint};
  }

  &:hover .delete-button {
    opacity: 1;
    visibility: visible;
  }

  &:hover .amount {
    transform: translateX(-40px);
  }
`;

const Category = styled.span`
  width: 92px;
  flex: 0 0 auto;
  padding: 16px 23px;
  text-align: center;
  white-space: nowrap;
  background-color: ${({ theme, children }) => {
    const colorKey = theme.categoryColors[children];
    return theme.colors[colorKey];
  }};
`;

const Description = styled.span`
  width: 400px;
  padding: 0 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PaymentMethod = styled.span`
  width: 104px;
  white-space: nowrap;
`;

const Amount = styled.span`
  flex: 1 1 auto;
  text-align: right;
  margin-right: 16px;
  color: ${({ theme, type }) => {
    const { colors } = theme;
    return type === 'income' ? colors.pastelSeagull : colors.pastelAmaranth;
  }};
  white-space: nowrap;

  transition:
    transform 0.5s ease,
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 16px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;

  color: ${({ theme }) => theme.colors.pastelAmaranth};
  ${({ theme }) => theme.typography.semibold12};

  transition:
    transform 0.5s ease,
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export default function RecordItem({ record, onSelect, onDelete }) {
  const { category, description, paymentMethod, amount, type } = record;

  function handleDelete(e) {
    e.stopPropagation();
    onDelete(record.id);
  }

  return (
    <Item onClick={() => onSelect(record)}>
      <Category>{category}</Category>
      <Description>{description}</Description>
      <PaymentMethod>{paymentMethod}</PaymentMethod>
      <Amount className="amount" type={type}>
        {type === 'income' ? '+' : '-'}
        {amount.toLocaleString()}원
      </Amount>
      <DeleteButton className="delete-button" onClick={handleDelete}>
        삭제
      </DeleteButton>
    </Item>
  );
}
