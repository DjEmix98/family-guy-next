import { getRandomQuizQuestion } from "@/lib/questions"
import Link from "next/link"
import Image from 'next/image'
import { TbArrowBigRightFilled } from "react-icons/tb"


export default async function Page() {
    const data = await getRandomQuizQuestion()

    return (
        <section className="flex flex-col gap-32 py-5 md:flex-row-reverse md:justify-center">
            <div className="relative overflow-hidden rounded-2xl">
                <div className="md:w-[24rem]">
                    <Image src="/wallpaper.jpg" alt="" width={700} height={700} />
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>

            <div className="md:w-[30%] flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">Family Guy Quiz</h1>
                <p className="text-sm leading-6 text-gray-300">
                    Take this quiz to find out how much you know about the hit animated
                    sitcom Family Guy. Test your knowledge of the characters, the
                    episodes, and the show&apos;s many pop culture references.
                </p>
                <Link
                    href={`/quiz/${data.randomQuestion}`}
                    className="flex items-center justify-center gap-1 px-5 py-4 
                    font-semibold text-orange-500 transition-colors rounded-md 
                    outline duration-600 hover:bg-orange-950">
                    <TbArrowBigRightFilled className="text-lg" />
                    Take a Quiz Now!
                </Link>
            </div>
        </section>
    )
}