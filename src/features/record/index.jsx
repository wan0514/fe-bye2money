import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';

import { groupByDate, filterGroupedByType } from './utils/utils';
import RecordListHeader from './components/RecordListHeader';
import RecordDateGroup from './components/RecordDateGroup';

const RecordListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ListBox = styled.div`
  margin-top: 16px;
`;

export default function RecordList({ recordData, onSelect, onDelete }) {
  const [showIncome, setShowIncome] = useState(true);
  const [showExpense, setShowExpense] = useState(true);

  // 날짜별 그룹핑
  const groupedByDate = useMemo(() => groupByDate(recordData), [recordData]);

  // 필터링
  const visibleGroups = useMemo(
    () => filterGroupedByType(groupedByDate, showIncome, showExpense),
    [groupedByDate, showIncome, showExpense]
  );

  return (
    <RecordListContainer>
      <RecordListHeader
        totalCount={recordData.length}
        showIncome={showIncome}
        showExpense={showExpense}
        onToggleIncome={() => setShowIncome((prev) => !prev)}
        onToggleExpense={() => setShowExpense((prev) => !prev)}
      />

      <ListBox>
        {Object.entries(visibleGroups).map(([date, items]) => (
          <RecordDateGroup
            key={date}
            date={date}
            records={items}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </ListBox>
    </RecordListContainer>
  );
}
