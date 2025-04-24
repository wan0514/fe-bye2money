export function getFormatDateToString(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('유효한 Date 객체를 전달해주세요.');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
