function AmountInput({ type, amount, onTypeToggle, onAmountChange }) {
  return (
    <div>
      <label>금액</label>
      <button type="button" onClick={onTypeToggle}>
        {type === 'expense' ? '–' : '+'}
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <span>원</span>
    </div>
  );
}

export default AmountInput;
