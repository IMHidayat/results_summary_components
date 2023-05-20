import "../sass/home.scss";
import iconReaction from "../assets/icon-reaction.svg";
import iconMemory from "../assets/icon-memory.svg";
import iconVerbal from "../assets/icon-verbal.svg";
import iconVisual from "../assets/icon-visual.svg";

// COMPONENTS
import ResultBar from "../components/resultsBar";

export default function Home() {
  return (
    <main className="grid">
      <div className="grid md:rounded-3xl md:shadow-2xl md:shadow-indigo-200 ">
        <section className="p-6 md:p-10 text-center rounded-b-[2.5rem] md:rounded-3xl ">
          <h1 className="mb-8 text-xl font-bold text-1">Your Result</h1>
          <div className="mx-auto mb-8 md:mb-6 rounded-full ">
            <h1 className="mb-[-15px] text-[4rem] font-bold text-white">76</h1>
            <span className="font-bold text-gray-400">of 100</span>
          </div>
          <h2 className="mb-2 text-3xl md:text-[1.8rem] font-semibold text-white">Great</h2>
          <p className="mx-auto text-lg md:text-base md:leading-5 md:tracking-tight text-1">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className="grid p-8 md:p-9 ">
          <h5 className="mb-4 md:mb-5 text-lg md:text-xl font-bold">Summary</h5>
          <ResultBar name={"Reaction"} img={iconReaction} bgColor={"bg-[#fff6f5]"} color={"text-[#e97e86]"} val={80} />
          <ResultBar name={"Memory"} img={iconMemory} bgColor={"bg-[#fffbf2]"} color={"text-[#f2be58]"} val={92} />
          <ResultBar name={"Verbal"} img={iconVerbal} bgColor={"bg-[#f2fbfa]"} color={"text-[#4fb29b]"} val={61} />
          <ResultBar name={"Visual"} img={iconVisual} bgColor={"bg-[#f3f3fd]"} color={"text-[#4b51b0]"} val={72} />
          <button className="p-4 md:p-2 mt-3 rounded-full text-xl md:text-base font-semibold text-white bg-[#303b59]">Continue</button>
        </section>
      </div>
    </main>
  );
}
