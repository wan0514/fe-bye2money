export function getSortedRecordsByDate(records) {
  return [...records].sort((a, b) => {
    // 1. date 비교 (문자열: YYYY-MM-DD)
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;

    // 2. date가 같을 경우, createdAt 비교 (ISO 문자열)
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;

    return 0; // 둘 다 같으면 순서 유지
  });
}
