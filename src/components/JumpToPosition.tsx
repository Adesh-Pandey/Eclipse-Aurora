'use client';

import { useSimulationSpecs } from '@/contexts';
import React, { useState } from 'react';

const JumpToPosition = () => {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [monthError, setMonthError] = useState('');
  const [dayError, setDayError] = useState('');

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    if (newMonth >= 1 && newMonth <= 12) {
      setMonth(newMonth);
      setSimulationSpec((prev) => ({
        ...prev,
        earth: { ...prev.earth, theta: (newMonth / 4) * 360 },
      }));
      setMonthError('');
    } else {
      setMonthError('Month should be between 1 and 12');
    }
  };

  const { setSimulationSpec } = useSimulationSpecs();

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDay = parseInt(e.target.value, 10);
    if (newDay >= 1 && newDay <= 30) {
      setDay(newDay);

      setDayError('');
    } else {
      setDayError('Day should be between 1 and 30');
    }
  };

  return (
    <div className='absolute bottom-40 flex-col rounded-lg border-2 border-green-500 px-4 py-3 text-green-500'>
      <p className='pb-2 text-center text-2xl'>Jump to</p>
      <div className='flex gap-2'>
        <label htmlFor='month'>Month:</label>
        <input
          type='text'
          inputMode='numeric'
          pattern='[0-9]+'
          className='w-[40px] rounded-lg border-green-500 text-black'
          onChange={handleMonthChange}
        />
        <label htmlFor='month'>Day: </label>
        <input
          type='text'
          inputMode='numeric'
          pattern='[0-9]+'
          className='w-[40px] rounded-lg border-green-500 text-black'
          onChange={handleDayChange}
        />
      </div>
      {monthError && <p className=' text-red-500'>{monthError}</p>}
      {dayError && <p className=' text-red-500'>{dayError}</p>}
    </div>
  );
};

export default JumpToPosition;
