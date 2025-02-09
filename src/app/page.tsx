const QUESTION_LIST = [
  {
    title: "状態変数の作成1",
    path: "sample/useState",
  },
  {
    title: "",
    path: "sample/useState",
  },
  {
    title: "状態変数の作成3",
    path: "sample/useState",
  },
  {
    title: "状態変数の作成4",
    path: "sample/useState",
  },
  {
    title: "状態変数の作成5",
    path: "sample/useState",
  },
  {
    title: "状態変数の作成1",
    path: "sample/useState",
  },
];

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <ol>
        {QUESTION_LIST.map((question, index) => (
          <li key={index}>
            <a href={question.path}>{question.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}
