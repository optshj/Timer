'use client'
import {useState,createContext,useContext} from "react"

const TimeContext = createContext<any>(null);
export default function TimeProvider({children}: Readonly<{children: React.ReactNode;}>) {
    const [today,setToday] = useState<Date>(new Date());

    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const timeDiff = Math.abs(midnight.getTime() - today.getTime());


    return (
        <TimeContext.Provider value={{ today,lastDayOfMonth,timeDiff }}>
            {children}
        </TimeContext.Provider>
    );
}
export function useTime(){
    const {today,lastDayOfMonth,timeDiff} = useContext(TimeContext);
    return {today,lastDayOfMonth,timeDiff};
}