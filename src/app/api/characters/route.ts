import { NextResponse } from "next/server";
import characters from "@/data/characters.json";
import { Character } from "@/type/character.type";
export async function GET(): Promise<NextResponse<Character[]>> {
  return NextResponse.json<Character[]>(characters.data);
}
