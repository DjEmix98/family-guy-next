'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiRepeat } from 'react-icons/fi'
import { MdNearbyError } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { AnswerResponse } from '@/type/answer.type'

type AnswerProp = {
    answers: string[];
    questionId: string;
}
export const Answer = ({ answers, questionId }: AnswerProp) => {
    const [selected, setSeleceted] = useState<string | null>(null)
    const [data, setData] = useState<AnswerResponse | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (selected) {
            setLoading(true)
            fetch(`/api/quiz/answer/${questionId}`)
                .then(res => res.json())
                .then((data: AnswerResponse) => {
                    setLoading(false)
                    setData(data)
                })
        }
    }, [questionId, selected])

    return (
        <>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {answers.map(item => {
                    const isLoading = selected === item && loading
                    const isWrong =
                        selected === item && data && data?.correct !== selected
                    const isCorrect = data?.correct === item

                    return (
                        <li key={item}>
                            <button
                                disabled={!!data || loading}
                                onClick={() => setSeleceted(item)}
                                className={`
                  ${'p-2 rounded-md  items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all'}
                  ${isLoading && 'animate-pulse'}
                  ${isWrong ? 'bg-red-700' : 'bg-slate-800'}
                  ${isCorrect && 'outline text-green-500'}
                `}
                            >
                                {item}
                                {isCorrect && <FaCheck />}
                                {isWrong && <MdNearbyError />}
                            </button>
                        </li>
                    )
                })}
            </ul>
            {data?.random && (
                <Link
                    href={`/quiz/${data.random}`}
                    className="flex items-center gap-1 text-blue-400"
                >
                    <FiRepeat className="mt-1" />
                    Do it again
                </Link>
            )}
        </>
    )
}