import useMonthNavigation from './hooks/useMonthNavigation';

function Header() {
  const { goToNextMonth, goToPreviousMonth } = useMonthNavigation();

  return (
    <>
      <button
        onClick={goToPreviousMonth}
        style={{
          padding: '8px 12px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px',
        }}
      >
        ◀ 이전
      </button>
      <button
        onClick={goToNextMonth}
        style={{
          padding: '8px 12px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        다음 ▶
      </button>
    </>
  );
}

export default Header;
