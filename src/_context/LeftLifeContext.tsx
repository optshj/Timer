import React,{createContext,useContext,useState} from "react";

import useBirthDate from "../_hooks/useBirthDate";
import useDeathDate from "../_hooks/useDeathDate";

interface DateDiff {
    years: number;
    months: number;
    days: number;
}

function getDateDiff(date1: Date, date2: Date){
    let yearDiff = date2.getFullYear() - date1.getFullYear();
    let monthDiff = date2.getMonth() - date1.getMonth();
    let dayDiff = date2.getDate() - date1.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        const lastMonthDate = new Date(date2.getFullYear(), date2.getMonth(), 0);
        dayDiff = lastMonthDate.getDate() + dayDiff;
    }
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff = monthDiff + 12;
    } 
    return { years: yearDiff, months: monthDiff, days: dayDiff };
}
function getDate(date:Date){
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    return { years, months, days };
}

const LeftLifeContext = createContext<any>(null);

export default function LeftLifeProivder({children}: Readonly<{children: React.ReactNode}>) {
    const {birth,setBirthDate} = useBirthDate();
    const {death,setDeathDate} = useDeathDate();
    const today = new Date();

    const birthDate:DateDiff = getDate(birth);
    const deathDate:DateDiff = getDate(death);
    const leftLife:DateDiff = getDateDiff(today,death);
    const fullLife:DateDiff = getDateDiff(birth,death);
    return (
        <LeftLifeContext.Provider value={{ birthDate, deathDate, leftLife, fullLife, setBirthDate, setDeathDate}}>
            {children}
        </LeftLifeContext.Provider>
    );
}
export function useLeftLife(){
    const {birthDate,deathDate,leftLife,fullLife,setBirthDate,setDeathDate} = useContext(LeftLifeContext);
    return {birthDate,deathDate,leftLife,fullLife,setBirthDate,setDeathDate};
}