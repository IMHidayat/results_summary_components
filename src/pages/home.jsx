import "../sass/home.scss";
import iconReaction from "../assets/icon-reaction.svg";
import iconMemory from "../assets/icon-memory.svg";
import iconVerbal from "../assets/icon-verbal.svg";
import iconVisual from "../assets/icon-visual.svg";

// COMPONENTS
import ResultBar from "../components/resultsBar";

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <section className="col-12 col-md-6 text-center rounded-bottom-5">
            <h1 className="my-4 text-xl font-semibold text-1">Your Result</h1>
            <div className="m-[2.6rem_auto] rounded-circle ">
              <h1 className="mb-1 text-[4rem] font-bold text-white">76</h1>
              <span className="text-white-50">Of 100</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">Great</h2>
            <p className="mx-auto  text-1 ">You scored higher than 65% of the people who have taken these tests.</p>
          </section>
          <section className="col-12 col-md-6 d-flex flex-column">
            <h5 className="mb-4 fw-bold">Summary</h5>
            <ResultBar name={"Reaction"} img={iconReaction} bgColor={"bg-[#fff6f5]"} color={"text-[#e97e86]"} val={80} />
            <ResultBar name={"Memory"} img={iconMemory} bgColor={"bg-[#fffbf2]"} color={"text-[#f2be58]"} val={92} />
            <ResultBar name={"Verbal"} img={iconVerbal} bgColor={"bg-[#f2fbfa]"} color={"text-[#4fb29b]"} val={61} />
            <ResultBar name={"Visual"} img={iconVisual} bgColor={"bg-[#f3f3fd]"} color={"text-[#4b51b0]"} val={72} />

            <button className="btn p-3 rounded-full text-xl text-white font-semibold bg-[#303b59]">Continue</button>
          </section>
        </div>
      </div>
    </main>
  );
}
