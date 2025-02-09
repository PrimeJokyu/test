import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function NextQuestion(p: { isEnd?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // 現在の q の値を取得し、数値化（存在しない場合は 0）
  const currentQ = Number(searchParams.get("q") || 0);

  // ボタンクリック時に q を +1 して URL を更新
  const handleClick = () => {
    if (p.isEnd) {
      return;
    }
    const newQ = currentQ + 1;
    router.push(`${pathname}?q=${newQ}`);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          p.isEnd ? "bg-gray-500" : "bg-blue-500"
        } mt-2 px-4 py-2  text-white rounded-lg`}
      >
        次の問題{">"}
      </button>
    </>
  );
}
