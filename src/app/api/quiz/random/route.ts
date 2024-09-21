import { NextResponse } from "next/server";
import questions from "@/data/quiz.json";
export async function GET(): Promise<NextResponse<{ randomQuestion: string }>> {
  try {
    const random = Math.floor(Math.random() * questions.length);
    return NextResponse.json({
      randomQuestion: questions[random].id,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
