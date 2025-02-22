"use client";

import { QUESTION_LIST } from "@/consts/questionPath";

const CounterPage: React.FC = () => {
  return (
    <div className="p-6">
      <ol>
        {QUESTION_LIST.map((question, index) => (
          <li key={index}>
            <a href={`${question.path}?q=${index + 1}`}>
              Q{index + 1} {question.title}
            </a>
          </li>
        ))}
      </ol>
      <h1 className="text-4xl font-bold">Counter</h1>
      <a href="/sample/useState?q=1">useState</a>
    </div>
  );
};

export default CounterPage;
