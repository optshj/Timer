import Quote from "./_components/Quote";
import HealthTips from "./_components/HealthTips";
import CalcLife from "./_components/CalcLife";

export default function Home() {
    return (
      <>
        <CalcLife/>
        <HealthTips/>
        <Quote/>
      </>
    );
  }