import React from 'react';
import DateInput from './DateInput';
import AmountInput from './AmountInput';
import DescriptionInput from './DescriptionInput';
import PaymentMethodSelect from './PaymentMethodSelect';
import CategorySelect from './CategorySelect';
import ConfirmButton from './ConfirmButton';

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
