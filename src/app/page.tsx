import Link from "next/link";
import Image from 'next/image'
import { getAllCharacters } from "@/lib/characters";

export default async function Home() {
  const data = await getAllCharacters()
  return (
    <main className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
      {data?.map(item => {
        return (
          <Link
            href={`/characters/${item.slug}`}
            key={item.name}
            className="overflow-hidden rounded-md"
          >
            <Image
              src={item.avatar}
              alt=""
              className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
              width={500}
              height={500}
            />
          </Link>
        )
      })}
    </main>
  );
}
