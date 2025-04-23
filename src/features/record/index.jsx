import React from 'react';

export default function Record({ recordData, onSelect }) {
  return (
    <ol>
      {recordData.map((record) => {
        return (
          <li key={record.id} onClick={() => onSelect(record)}>
            {record.description}
          </li>
        );
      })}
    </ol>
  );
}
