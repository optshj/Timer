import DarkmodeProvider from "./DarkmodeContext";
import LeftLifeProivder from "./LeftLifeContext";
import MediaProvider from "./MediaContext";
import TimeProvider from "./TimeContext";

function ContextProvider({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <DarkmodeProvider>
            <MediaProvider>
                <LeftLifeProivder>
                    <TimeProvider>
                        {children}
                    </TimeProvider>
                </LeftLifeProivder>
            </MediaProvider>
        </DarkmodeProvider>
    );
}
export default ContextProvider