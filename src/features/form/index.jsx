import React from 'react';
import DateInput from './components/DateInput';
import AmountInput from './components/AmountInput';
import DescriptionInput from './components/DescriptionInput';
import PaymentMethodSelect from './components/PaymentMethodSelect';
import CategorySelect from './components/CategorySelect';
import ConfirmButton from './components/ConfirmButton';

function Form({
  formData,
  onChange,
  onSubmit,
  paymentOptions,
  categoryOptions,
  isFormValid,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <DateInput
        value={formData.date}
        onChange={(value) => onChange('date', value)}
      />

      <AmountInput
        type={formData.type}
        amount={formData.amount}
        onTypeToggle={() =>
          onChange('type', formData.type === 'expense' ? 'income' : 'expense')
        }
        onAmountChange={(value) => onChange('amount', value)}
      />

      <DescriptionInput
        value={formData.description}
        onChange={(value) => onChange('description', value)}
      />

      <PaymentMethodSelect
        value={formData.paymentMethod}
        options={paymentOptions}
        onChange={(value) => onChange('paymentMethod', value)}
      />

      <CategorySelect
        value={formData.category}
        options={categoryOptions}
        onChange={(value) => onChange('category', value)}
      />

      <ConfirmButton onClick={onSubmit} isFormValid={isFormValid} />
    </form>
  );
}

export default Form;
