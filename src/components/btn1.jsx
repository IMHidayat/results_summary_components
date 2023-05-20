export default function Btn1(p) {
  return <button className={`btn-1 ${p.c ? p.c : "p-2 md:p-2 mt-2"}`}>Continue</button>;
}
