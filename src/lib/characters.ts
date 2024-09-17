import { Character } from "@/type/character.type";
import { Quotes } from "@/type/quote.type";
import { LOCAL_HOST_EP } from "@/utils/endpoint";

export async function getAllCharacters(): Promise<Character[]> {
    const data = await fetch(`${LOCAL_HOST_EP}/characters`)
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json();
  }

  export async function getCharacterBySlug(slug: string): Promise<Quotes> {
    const data = await fetch(`${LOCAL_HOST_EP}/characters/${slug}`);
  
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return data.json();
  }