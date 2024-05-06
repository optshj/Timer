import Quote from "./_components/Quote";
import HealthTips from "./_components/HealthTips";
import CalcLife from "./_components/calcLife/CalcLife";

export default function Home() {
    return (
      <>
        <CalcLife/>
        <HealthTips/>
        <Quote/>
      </>
    );
  }