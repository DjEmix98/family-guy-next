import { QuizResponse } from "@/type/quiz-response.type";
import { LOCAL_HOST_EP } from "@/utils/endpoint";

export async function getQuizQuestion(id: string): Promise<QuizResponse> {
  const data = await fetch(`${LOCAL_HOST_EP}/quiz/${id}`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
