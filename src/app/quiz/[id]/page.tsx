import { Answer } from "@/components/Answer"
import { getQuizQuestion } from "@/lib/quiz"
import { RequestQueryParams } from "@/type/request-query-params"

export default async function Page({ params }: RequestQueryParams<{ id: string }>) {
    const question = await getQuizQuestion(params.id)
    return (
        <main className="flex flex-col gap-5 py-5" >
            <h1 className="text-lg font-semibold">{question.title}</h1>
            <Answer answers={question.answers} questionId={params.id} />
        </main>
    )
}