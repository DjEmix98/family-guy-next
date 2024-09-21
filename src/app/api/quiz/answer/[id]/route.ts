import { NextRequest, NextResponse } from "next/server"
import questions from "@/data/quiz.json";

export async function GET(_: NextRequest, { params }: {params: {id: string}}) {
    try {
      const question = questions.find(item => item.id === params.id)
  
      if (!question) {
        return new NextResponse('not found', { status: 404 })
      }
  
      const { correctAnswer } = question
  
      const filteredQuestions = questions.filter(
        item => item.id !== params.id,
      )
      const random = Math.floor(Math.random() * filteredQuestions.length)
  
      return NextResponse.json({
        correct: correctAnswer,
        random: filteredQuestions[random].id,
      })
    } catch (error) {
      return new NextResponse('Internal Server Error', { status: 500 })
    }
  }