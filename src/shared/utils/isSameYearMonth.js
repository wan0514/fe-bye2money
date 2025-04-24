export function isSameYearMonth(currentYear, currentMonth, targetDate) {
  const date = new Date(targetDate);
  return (
    date.getFullYear() === currentYear && date.getMonth() + 1 === currentMonth
  );
}
