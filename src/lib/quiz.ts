import { QuizResponse } from "@/type/quiz-response.type";

export async function getQuizQuestion(id: string): Promise<QuizResponse> {
  const data = await fetch(`${process.env.ENDPOINT}/quiz/${id}`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}
