'use client'
import { motion } from "framer-motion";
import { useState ,useRef,useEffect} from "react";
import funfacts from './funfacts';

export default function FunFacts() {
    const [isOpen, setIsOpen] = useState(false);
    const [randomNum, setRandomNum] = useState(-1);
    const [indexlist, setIndexlist] = useState<number[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleOpen = () => {
        setIsOpen(true);
        generateRandomNum();
    };


    const handleClose = () => {
        setIsOpen(false);
    };

    const generateRandomNum = () => {
        const newRandomNum = Math.floor(Math.random() * funfacts[0].funFacts.length);
        setRandomNum(newRandomNum);
        if(newRandomNum in indexlist){
            setIndexlist([...indexlist])
        }
        setIndexlist([...indexlist, newRandomNum]);
    };
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [indexlist]);


    return (
        <div className="absolute bottom-0 text-white z-50 right-0 w-56 max-h-[75vh] flex-col flex justify-end mb-10 mr-5 items-center gap-1 py-2 rounded-xl">
            <>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, transform: "scale(0)" }}
                        animate={{ opacity: 1, transform: "scale(1)" }}
                        exit={{ opacity: 0, transform: "scale(0)" }}
                    >
                        <h1 className={'font-serif py-2'}>{funfacts[0].heading} ?🤔</h1>
                        <hr />
                        <div   ref={scrollContainerRef} className="fact-list-container max-h-[70vh] p-3 py-5  overflow-hidden"  style={{ overflowY: "scroll" }} >

                            <ul className="fact-list list-none ">
                                {indexlist.map((list, index) => (
                                    <>
                                    <li key={index} className={'font-serif text-md transition ease-in-out delay-1500 py-3  '}>
                                        {funfacts[0].funFacts[list]}
                                    </li>
                                    <hr className={'text-red-500 '} />
                                    </>
                                ))}
                            </ul>
                        </div>
                        <div className={'flex justify-between'}>
                            <button onClick={handleClose} className={'px-2 rounded-lg text-red-500 text-2xl '}>&times;</button>
                            <button onClick={generateRandomNum} className={'bg-green-500 text-white p-2 rounded-b-lg'}>Next</button>
                        </div>
                    </motion.div>
                )}
                {!isOpen && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-30 rounded"
                        onClick={handleOpen}
                    >
                        Facts About Eclipse
                    </button>
                )}
            </>
        </div>
    );
}
