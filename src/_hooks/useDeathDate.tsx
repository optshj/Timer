import { useEffect, useState } from "react";

export default function useDeathDate() {
    const [death, setDeath] = useState<Date>(new Date());

    useEffect(() => {
        const localDeathDate = window.localStorage.getItem('deathDate');
        if (localDeathDate) {
            const parsedDate = new Date(localDeathDate);
            setDeath(parsedDate);
            document.body.dataset.deathDate = localDeathDate;
        } else {
            const currentDate = new Date();
            setDeath(currentDate);
            document.body.dataset.deathDate = currentDate.toISOString();
        }
    }, []);

    const setDeathDate = (deathDate: Date) => {
        const newDeathDate = new Date(deathDate.toISOString());
        setDeath(newDeathDate);
        window.localStorage.setItem('deathDate', newDeathDate.toISOString());
        document.body.dataset.deathDate = newDeathDate.toISOString();
    };
    return { death, setDeathDate };
}
