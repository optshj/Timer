import { createContext,useContext,useState } from 'react';

const ScoreArrayContext = createContext<any>(null);

export default function ScoreArrayProvider({children}: {children: React.ReactNode}) {
    const [scoreArray,setScoreArray] = useState<number[]>([]);

    return (
        <ScoreArrayContext.Provider value={{scoreArray,setScoreArray}}>
            {children}
        </ScoreArrayContext.Provider>
    );
}
export function useScoreArray() {
    const {scoreArray,setScoreArray} = useContext(ScoreArrayContext);
    return {scoreArray,setScoreArray};
}