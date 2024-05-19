import { useEffect, useState } from "react";

export default function useBirthDate() {
    const [birth, setBirth] = useState<Date>(new Date());

    useEffect(() => {
        const localDeathDate = window.localStorage.getItem('birthDate');
        if (localDeathDate) {
            const parsedDate = new Date(localDeathDate);
            setBirth(parsedDate);
            document.body.dataset.deathDate = localDeathDate;
        } else {
            const currentDate = new Date();
            setBirth(currentDate);
            document.body.dataset.deathDate = currentDate.toISOString();
        }
    }, []);

    const setBirthDate = (birthDate: Date) => {
        const newBirthDate = new Date(birthDate.toISOString());
        setBirth(newBirthDate);
        window.localStorage.setItem('birthDate', newBirthDate.toISOString());
        document.body.dataset.deathDate = newBirthDate.toISOString();
    };
    return { birth, setBirthDate };
}
