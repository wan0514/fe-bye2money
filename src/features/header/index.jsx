import styled from '@emotion/styled';
import useMonthNavigator from './hooks/useMonthNavigator';
import usePageNavigator from './hooks/usePageNavigator';
import LogoSection from './components/LogoSection';
import MonthNavigator from './components/MonthNavigator';
import TabNavigation from './components/TabNavigation';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 216px;
  background-color: ${({ theme }) => theme.colors.pastelJordyBlue};
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 175px;
  max-width: 1024px;
  margin: 40px auto 64px;
`;

function Header({ year, month, activeTab }) {
  const { goToNextMonth, goToPreviousMonth } = useMonthNavigator();
  const { navigateTo } = usePageNavigator();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoSection onLogoClick={() => navigateTo('home')} />
        <MonthNavigator
          year={year}
          month={month}
          onPrevMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
        />
        <TabNavigation
          activeTab={activeTab}
          onNoteClick={() => navigateTo('home')}
          onCalendarClick={() => navigateTo('calendar')}
          onStatsClick={() => navigateTo('stats')}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
