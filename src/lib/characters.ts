import { Character } from "@/type/character.type";
import { Quotes } from "@/type/quote.type";

export async function getAllCharacters(): Promise<Character[]> {
    const data = await fetch(`${process.env.ENDPOINT}/characters`)
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json();
  }

  export async function getCharacterBySlug(slug: string): Promise<Quotes> {
    const data = await fetch(`${process.env.ENDPOINT}/characters/${slug}`);
  
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return data.json();
  }