import styled from '@emotion/styled';
import NoteIcon from '../../../assets/icons/doc.svg?react';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';
import StatsIcon from '../../../assets/icons/chart.svg?react';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;

  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  transition: background-color 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export default function TabNavigator({
  activeTab,
  onNoteClick,
  onCalendarClick,
  onStatsClick,
}) {
  const tabs = [
    { key: 'home', icon: NoteIcon, handler: onNoteClick },
    { key: 'calendar', icon: CalendarIcon, handler: onCalendarClick },
    { key: 'stats', icon: StatsIcon, handler: onStatsClick },
  ];

  return (
    <IconWrapper>
      {tabs.map(({ key, icon: Icon, handler }) => (
        <IconButton key={key} active={activeTab === key} onClick={handler}>
          <Icon />
        </IconButton>
      ))}
    </IconWrapper>
  );
}
