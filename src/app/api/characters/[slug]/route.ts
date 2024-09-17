import { NextRequest, NextResponse } from "next/server";
import characters from "@/data/characters.json";
import quotes from "@/data/quotes.json";
import { Quotes } from "@/type/quote.type";
import { RequestQueryParams } from "@/type/request-query-params";

export async function GET(
  _: NextRequest,
  { params }: RequestQueryParams<{ slug: string }>
): Promise<NextResponse<Quotes>> {
  try {
    const character = characters.data.find((item) => item.slug === params.slug);

    if (!character) {
      return new NextResponse("not found", { status: 404 });
    }

    const characterQuotes = quotes.filter(
      (item) => item.character_id === character.id
    );

    return NextResponse.json({
      character,
      characterQuotes:
        characterQuotes.length > 0
          ? characterQuotes.map(({ quote }) => quote)
          : [],
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
