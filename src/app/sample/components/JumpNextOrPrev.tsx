import NextQuestion from "./atom/NextQuestion";
import PreviousQuestion from "./atom/PreviousQuestion";

export default function JumpNextOrPrev(p: { isEnd?: boolean }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <PreviousQuestion />
      <NextQuestion isEnd={p.isEnd} />
    </div>
  );
}
