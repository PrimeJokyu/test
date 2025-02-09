"use client";

import React from "react";
import Q1 from "./Q1";
import { useSearchParams } from "next/navigation";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";

export default function ToggleTextButton() {
  const searchParams = useSearchParams();

  // 例: "name" というクエリパラメータを取得
  const questioNumber = searchParams.get("q") || "No name provided";

  const getQuestion = () => {
    switch (questioNumber) {
      case "1":
        return <Q1 />;
      case "2":
        return <Q2 />;
      case "3":
        return <Q3 />;
      case "4":
        return <Q4 />;
      case "5":
        return <Q5 />;
      case "6":
        return <Q6 />;
      case "7":
        return <Q7 />;
      case "8":
        return <Q8 />;
      case "9":
        return <Q9 />;
    }
  };

  return <div>{getQuestion()}</div>;
}
