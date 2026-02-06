import React from 'react';
import { AlertBoxProps } from '../types';

const AlertBox: React.FC<AlertBoxProps> = ({ type, text }) => {
  const styles = {
    tip: 'bg-cyan-50 border-cyan-200 text-gray-800',
    note: 'bg-gray-200 border-gray-300 text-gray-800',
    important: 'bg-red-50 border-red-200 text-gray-800',
  };

  const labels = {
    tip: 'Tip',
    note: 'Note',
    important: 'Important',
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r-md text-sm md:text-base font-medium ${styles[type]}`}>
      <span className="font-bold mr-2">{labels[type]}:</span>
      {text}
    </div>
  );
};

export default AlertBox;
