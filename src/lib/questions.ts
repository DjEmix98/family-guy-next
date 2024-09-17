import { LOCAL_HOST_EP } from "@/utils/endpoint"

export async function getRandomQuizQuestion() {
    const data = await fetch(`${LOCAL_HOST_EP}/quiz/random`, { cache: 'no-store' })
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }