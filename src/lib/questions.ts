export async function getRandomQuizQuestion() {
    const data = await fetch(`${process.env.ENDPOINT}/quiz/random`, { cache: 'no-store' })
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }