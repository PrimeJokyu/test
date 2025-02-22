"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const notify = (text: string) => toast(text);
  const sendEmail = async (formData: FormValues) => {
    setLoading(true);
    setError("");

    const res = await fetch("api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        sendTo: formData.email,
      }),
    });

    const data = await res.json();
    const status = res.status;
    if (status !== 200) {
      setError(` ${data.message} code: ${status}`);
    }
    console.log(data);
    console.log(status);
    if (res.status === 200) {
      notify("メールを送信しました。");
    }
    setLoading(false);
  };

  const onSubmit = (formData: FormValues) => {
    console.log("フォーム入力値:", formData);
    // APIリクエストを送る処理をここに追加
    sendEmail(formData);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-80">
        {/* 名前入力 */}
        <div>
          <label htmlFor="name" className="block mb-1">
            お名前
          </label>
          <input
            id="name"
            type="text"
            className="border p-1 w-full"
            {...register("name", { required: "お名前は必須です。" })}
          />
          {errors.name && (
            <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* メールアドレス入力 */}
        <div>
          <label htmlFor="email" className="block mb-1">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="border p-1 w-full"
            {...register("email", {
              required: "メールアドレスは必須です。",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "メールアドレスの形式が正しくありません。",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* エラーがあれば表示 */}

        <div className="text-red-500 font-bold h-10">{error ? error : ""}</div>
        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 bg-blue-600 text-white rounded ${
            loading && "bg-gray-500 text-white"
          }`}
        >
          送信
        </button>
      </form>
    </div>
  );
}
