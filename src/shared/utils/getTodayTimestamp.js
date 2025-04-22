// example : "2025-04-22T13:00:00Z"
export default function getTodayTimestamp() {
  const now = new Date();
  return now.toISOString();
}
