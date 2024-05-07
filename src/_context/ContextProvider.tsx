import DarkmodeProvider from "./DarkmodeContext";
import LeftLifeProivder from "./LeftLifeContext";
import TimeProvider from "./TimeContext";

function ContextProvider({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <DarkmodeProvider>
            <LeftLifeProivder>
                <TimeProvider>
                    {children}
                </TimeProvider>
            </LeftLifeProivder>
        </DarkmodeProvider>
    );
}
export default ContextProvider