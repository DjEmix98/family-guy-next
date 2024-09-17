import Link from "next/link";
import Image from 'next/image'
import { Character } from "@/type/character.type";

async function getAllCharacters(): Promise<Character[]> {
  const data = await fetch(`http://localhost:3000/api/characters`)

  // if (!data.ok) {
  //   throw new Error('Failed to fetch data')
  // }
  return data.json();
}

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
