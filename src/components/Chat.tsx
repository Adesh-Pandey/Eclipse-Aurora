'use client';
import { useSimulationSpecs } from '@/contexts';
import { ChatList } from '@/datas/tutorial';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Chat() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const { setSimulationSpec } = useSimulationSpecs();
  const showMessage = () => {
    if (currentMessageIndex == ChatList.length - 1) {
      setCurrentMessageIndex(0);
    } else {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };

  useEffect(() => {
    if (ChatList[currentMessageIndex].updateSimulation)
      setSimulationSpec(ChatList[currentMessageIndex].updateSimulation!);
  }, [currentMessageIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='bg-gray-800 absolute bottom-0 z-50 text-white right-0  w-96 p-5 rounded-lg flex-col flex justify-start mb-10 mr-5 items-center gap-1'>
      <div className='gap-4 text-lg font-semibold w-full items-center flex justify-center rounded-lg'></div>
      <div className='flex justify-center items-center'>
        <div className=' font-normal '>
          {ChatList[currentMessageIndex].explanation}
        </div>
        <div onClick={showMessage}>
          <NextIcon />
        </div>
      </div>
      <div className='flex justify-between w-full'>
        {ChatList.map((_, i) => {
          return (
            <motion.div
              layoutId={i === currentMessageIndex ? 'selected' : undefined}
              onClick={() => {
                setCurrentMessageIndex(i);
              }}
              key={i}
              className={`w-4 flex h-4 rounded-full ${
                i === currentMessageIndex ? 'bg-green-600' : 'bg-gray-400'
              }`}
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
}
function NextIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='w-6 h-6 hover:stroke-gray-800 hover:fill-gray-400 cursor-pointer'
    >
      <path d='M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z' />
    </svg>
  );
}
