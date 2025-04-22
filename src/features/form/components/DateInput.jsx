function DateInput({ value, onChange }) {
  return (
    <div>
      <label>일자</label>
      <input
        type="date"
        value={value.slice(0, 10)} // yyyy-mm-dd
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DateInput;
