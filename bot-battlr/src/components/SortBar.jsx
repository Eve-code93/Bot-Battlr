// src/components/SortBar.js
import React from 'react';

function SortBar({ onSort }) {
  return (
    <div className="sort-bar">
      <h3>Sort Bots By:</h3>
      <button onClick={() => onSort('health')}>Health</button>
      <button onClick={() => onSort('damage')}>Damage</button>
      <button onClick={() => onSort('armor')}>Armor</button>
    </div>
  );
}

export default SortBar;