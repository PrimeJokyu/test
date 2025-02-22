import React from "react";

export default function Question(props: {
  n: number;
  title: string;
  p: string;
}) {
  return (
    <>
      <div className="border px-3 py-2 rounded-lg border-blue-500">
        <h1>
          <strong>
            Q{props.n}. {props.title}
          </strong>
        </h1>
        <p>
          {(props.p ?? "")
            .replace(/\\n/g, "\n")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
    </>
  );
}
