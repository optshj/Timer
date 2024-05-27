import DarkModeProvider from "./DarkModeContext";
import LeftLifeProivder from "./LeftLifeContext";
import MediaProvider from "./MediaContext";
import TimeProvider from "./TimeContext";
import ScoreArrayProvider from "./ScoreContext";

function ContextProvider({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <DarkModeProvider>
            <MediaProvider>
                <LeftLifeProivder>
                    <TimeProvider>
                        <ScoreArrayProvider>
                            {children}
                        </ScoreArrayProvider>
                    </TimeProvider>
                </LeftLifeProivder>
            </MediaProvider>
        </DarkModeProvider>
    );
}
export default ContextProvider