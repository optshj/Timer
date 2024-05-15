import {useState,useEffect,createContext,useContext} from "react"

const TimeContext = createContext<any>(null);
export default function TimeProvider({children}: Readonly<{children: React.ReactNode;}>) {
    const [today,setToday] = useState<Date>(new Date());
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setToday(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    },[]);

    return (
        <TimeContext.Provider value={{ today,lastDayOfMonth,midnight }}>
            {children}
        </TimeContext.Provider>
    );
}
export function useTime() {
    const { today, lastDayOfMonth, midnight } = useContext(TimeContext);
    return { today, lastDayOfMonth, midnight };
}