const SECTION_LIST = [
  { title: "変数", path: "sample/variable" },
  { title: "関数", path: "sample/function" },
  { title: "useState", path: "sample/useState" },
];

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <ol>
        {SECTION_LIST.map((section, index) => (
          <li key={index}>
            <a href={`${section.path}?q=1`}>
              Q{index + 1} {section.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
