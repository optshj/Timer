import DarkmodeProvider from "./DarkmodeContext";
import LeftLifeProivder from "./LeftLifeContext";

function ContextProvider({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <DarkmodeProvider>
            <LeftLifeProivder>
                {children}
            </LeftLifeProivder>
        </DarkmodeProvider>
    );
}
export default ContextProvider