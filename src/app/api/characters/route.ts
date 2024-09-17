import { NextResponse } from "next/server";
import characters from "@/data/characters.json";
import { Character } from "@/type/character.type";
export async function GET(): Promise<NextResponse<Character[] | {error: string}>> {
  return NextResponse.json<Character[]>(characters.data);;
}
