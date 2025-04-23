export default function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (a[key] !== b[key]) return false;
  }

  return true;
}

/*
  ✅ 현재 구조 기준:
  - 단순 객체 (formData)
  - 중첩 없음, 배열 없음
  - 값: string, number, date string

  ⚠️ 향후 중첩 객체, 배열, 특수 타입(Date, NaN 등) 지원 필요 시 아래처럼 교체
  // import equal from 'fast-deep-equal';
  // export default equal;
*/
