import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

type ContactFormParam = {
  name: string;
  sendTo: string;
};

// Next.js 13+ の API ルートでは `export const POST` を明示的に定義
export async function POST(req: NextRequest) {
  try {
    // リクエストボディを JSON として取得
    const data: ContactFormParam = await req.json();

    // 環境変数のチェック
    if (!process.env.MAIL_SENDER || !process.env.MAIL_PASS) {
      console.error("環境変数が設定されていません");
      return NextResponse.json(
        {
          success: false,
          message: "Internal Server Error: Mail config missing",
        },
        { status: 500 }
      );
    }

    if (!data.name || !data.sendTo) {
      return NextResponse.json(
        { success: false, message: "Bad Request: Missing fields" },
        { status: 400 }
      );
    }

    // SMTP 設定
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
    });

    const mailOptions: Options = {
      from: process.env.MAIL_SENDER,
      to: data.sendTo,
      subject: `【プログラミングスクールプライム】${data.name}様`,
      html: `
        <div>
          <p>お世話になっております。</p>
          <p>プログラミングスクールプライム（コードアドベンチャー姪浜校）です。</p>
        </div>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);
    console.log("メール送信成功:", data);

    return NextResponse.json(
      { success: true, message: "メールを送信しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error: Failed to send email",
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      { status: 500 }
    );
  }
}
