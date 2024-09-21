import { NextRequest, NextResponse } from "next/server";
import questions from "@/data/quiz.json";
import { QuizResponse } from "@/type/quiz-response.type";
export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<QuizResponse>> {
  try {
    const question = questions.find((item) => item.id === params.id);

    if (!question) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
