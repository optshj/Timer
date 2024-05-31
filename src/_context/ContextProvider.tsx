'use client'
import DarkmodeProvider from "./DarkmodeContext";
import LeftLifeProivder from "./LeftLifeContext";
import MediaProvider from "./MediaContext";
import TimeProvider from "./TimeContext";
import ScoreArrayProvider from "./ScoreContext";

function ContextProvider({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <DarkmodeProvider>
            <MediaProvider>
                <LeftLifeProivder>
                    <TimeProvider>
                        <ScoreArrayProvider>
                            {children}
                        </ScoreArrayProvider>
                    </TimeProvider>
                </LeftLifeProivder>
            </MediaProvider>
        </DarkmodeProvider>
    );
}
export default ContextProvider