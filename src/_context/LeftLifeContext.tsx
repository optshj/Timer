'use client'
import React,{createContext,useContext} from "react";

interface DateDiff {
    years: number;
    months: number;
    days: number;
}
function getDateDiff(date1: Date, date2: Date): DateDiff {
    let yearDiff: number = date2.getFullYear() - date1.getFullYear();
    let monthDiff: number = date2.getMonth() - date1.getMonth();
    let dayDiff: number = date2.getDate() - date1.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        const lastMonthDate: Date = new Date(date2.getFullYear(), date2.getMonth(), 0);
        dayDiff = lastMonthDate.getDate() + dayDiff;
    }
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff = monthDiff + 12;
    } 
    return { years: yearDiff, months: monthDiff, days: dayDiff };
}
function getDate(date:Date):DateDiff{
    const years:number = date.getFullYear();
    const months:number = date.getMonth();
    const days:number = date.getDate();
    
    return { years, months, days };
}
 
function LeftLife(){
    const birth = new Date('2002-08-02');
    const death = new Date('2083-12-9');
    const today = new Date();

    const birthDate:DateDiff = getDate(birth);
    const deathDate:DateDiff = getDate(death);
    const todayDate:DateDiff = getDate(today);
    const leftLife:DateDiff = getDateDiff(today,death);
    const fullLife:DateDiff = getDateDiff(birth,death);

    return{ birthDate, deathDate, todayDate, leftLife, fullLife };
};

const LeftLifeContext = createContext(LeftLife());
export default function LeftLifeProivder({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <LeftLifeContext.Provider value={LeftLife()}>
            {children}
        </LeftLifeContext.Provider>
    );
}
export function useLeftLife(){
    const {birthDate, deathDate, todayDate, leftLife,fullLife} = useContext(LeftLifeContext);
    return {birthDate,deathDate,todayDate,leftLife,fullLife}
}