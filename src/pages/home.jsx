import "../sass/home.scss";
import iconReaction from "../assets/icon-reaction.svg";
import iconMemory from "../assets/icon-memory.svg";
import iconVerbal from "../assets/icon-verbal.svg";
import iconVisual from "../assets/icon-visual.svg";

// COMPONENTS
import ResultBar from "../components/resultsBar";

export default function Home() {
  return (
    <main className="container-fluid">
      <div className="row md:rounded-[2.5rem] md:shadow-2xl md:shadow-indigo-200 ">
        <section className="col-12 col-md-6 text-center rounded-b-[2.5rem] md:rounded-[2.5rem] ">
          <h1 className="my-4 fs-5 fw-bold text-1">Your Result</h1>
          <div className="m-[2.6rem_auto] md:my-8 rounded-circle ">
            <h1 className="mb-1 text-[4rem] fw-bold text-white">76</h1>
            <span className="text-white-50">Of 100</span>
          </div>
          <h2 className="mb-2 fs-2 fw-semibold text-white">Great</h2>
          <p className="mx-auto text-1">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className="col-12 col-md-6 p-[2rem] d-flex flex-column">
          <h5 className="mb-4 fs-5 fw-bolder">Summary</h5>
          <ResultBar name={"Reaction"} img={iconReaction} bgColor={"bg-[#fff6f5]"} color={"text-[#e97e86]"} val={80} />
          <ResultBar name={"Memory"} img={iconMemory} bgColor={"bg-[#fffbf2]"} color={"text-[#f2be58]"} val={92} />
          <ResultBar name={"Verbal"} img={iconVerbal} bgColor={"bg-[#f2fbfa]"} color={"text-[#4fb29b]"} val={61} />
          <ResultBar name={"Visual"} img={iconVisual} bgColor={"bg-[#f3f3fd]"} color={"text-[#4b51b0]"} val={72} />

          <button className="btn p-3 mt-3 p-md-2 mt-md-0 rounded-pill fs-5 text-white fw-semibold bg-[#303b59]">Continue</button>
        </section>
      </div>
    </main>
  );
}
