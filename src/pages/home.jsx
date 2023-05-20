import "../sass/home.scss";
import iconReaction from "../assets/icon-reaction.svg";
import iconMemory from "../assets/icon-memory.svg";
import iconVerbal from "../assets/icon-verbal.svg";
import iconVisual from "../assets/icon-visual.svg";

// COMPONENTS
import ResultBar from "../components/resultsBar";
import Btn1 from "../components/btn1";

export default function Home() {
  return (
    <main className="grid ">
      <article className="flex flex-col md:grid">
        <section className="p-5 md:p-9 ">
          <h1 className="mb-6">Your Result</h1>
          <div className="grid mx-auto mb-6 md:mb-6 ">
            <h1 className="mb-[-.5rem] md:mb-[-1rem]">76</h1>
            <span>of 100</span>
          </div>
          <h2 className="mb-2">Great</h2>
          <p className="mx-auto mb-5 px-5 md:px-0">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className="grid p-6 md:p-9 ">
          <h5 className="mb-5 md:mb-5">Summary</h5>
          <ResultBar val={80} name={"Reaction"} c={"bg-[#fff6f5]"} c2={"text-[#e97e86]"} img={iconReaction} />
          <ResultBar val={92} name={"Memory"} c={"bg-[#fffbf2]"} c2={"text-[#f2be58]"} img={iconMemory} />
          <ResultBar val={61} name={"Verbal"} c={"bg-[#f2fbfa]"} c2={"text-[#4fb29b]"} img={iconVerbal} />
          <ResultBar val={72} name={"Visual"} c={"bg-[#f3f3fd] "} c2={"text-[#4b51b0]"} c3={"md:mb-8"} img={iconVisual} />
          <Btn1 c={"p-2"} />
        </section>
      </article>
    </main>
  );
}
