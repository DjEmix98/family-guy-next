import { Character } from "@/type/character.type";
import { LOCAL_HOST_EP } from "@/utils/endpoint";

export async function getAllCharacters(): Promise<Character[]> {
    const data = await fetch(`${LOCAL_HOST_EP}/characters`)
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json();
  }