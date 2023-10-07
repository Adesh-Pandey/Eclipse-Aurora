'use client';

import { useSimulationSpecs } from '@/contexts';
import { SimulationSpecificationProps } from '@/contexts/SimulationContext';
import { ChatMessage, Chatlist } from '@/datas/chat';
import { useState } from 'react';

export default function Chat() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const { simulationSpec, setSimulationSpec } = useSimulationSpecs();
  const showMessage = () => {
    if (currentMessageIndex == Chatlist.length - 1) {
      setCurrentMessageIndex(0);
    } else {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };

  return (
    <div className=' bg-gray-100 absolute bottom-0 z-50 right-0  w-96 p-5 rounded-lg flex-col flex justify-start mb-10 mr-5 items-center gap-1'>
      <div className=' text-lg font-semibold w-full flex justify-center rounded-lg '>
        {Chatlist[currentMessageIndex].message}
      </div>
      <div className=' font-normal '>
        {Chatlist[currentMessageIndex].explanation}
      </div>
      <button
        onClick={showMessage}
        className=' bg-green-600 px-5 mb-2 py-2 rounded-lg text-white'
      >
        Next
      </button>
    </div>
  );
}
