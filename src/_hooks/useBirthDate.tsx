import { useEffect, useState } from "react";

export default function useBirthDate() {
    const [birth, setBirth] = useState<Date>(new Date());

    useEffect(() => {
        const localDeathDate = window.localStorage.getItem('birthDate');
        if (localDeathDate) {
            const parsedDate = new Date(localDeathDate);
            setBirth(parsedDate);
        } else {
            const currentDate = new Date();
            setBirth(currentDate);
        }
    }, []);

    const setBirthDate = (birthDate: Date) => {
        const newBirthDate = new Date(birthDate.toISOString());
        setBirth(newBirthDate);
        window.localStorage.setItem('birthDate', newBirthDate.toISOString());
    };
    return { birth, setBirthDate };
}
