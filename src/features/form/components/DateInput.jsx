function DateInput({ value, onChange }) {
  console.log(value);

  function formatDate(value) {
    if (!value) return '';
    const numbersOnly = value.replace(/\D/g, '');

    const year = numbersOnly.slice(0, 4);
    const month = numbersOnly.slice(4, 6);
    const day = numbersOnly.slice(6, 8);

    let result = year;
    if (month) result += '.' + month;
    if (day) result += '.' + day;

    return result;
  }

  function handleChange(e) {
    const rawValue = e.target.value;
    const numbersOnly = rawValue.replace(/\D/g, '');

    const formatted = formatDate(numbersOnly);

    onChange(formatted);
  }

  return (
    <div>
      <label>일자</label>
      <input
        placeholder="YYYY.MM.DD"
        value={formatDate(value)}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateInput;
