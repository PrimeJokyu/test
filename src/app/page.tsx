import { QUESTION_LIST } from "@/consts/questionPath";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <ol>
        {QUESTION_LIST.map((question, index) => (
          <li key={index}>
            <a href={`${question.path}?q=${index + 1}`}>
              Q{index + 1} {question.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
