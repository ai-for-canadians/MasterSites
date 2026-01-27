import { NextRequest, NextResponse } from 'next/server';
import { searchIngredients } from '@/lib/data/ingredients';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter "q" is required' },
      { status: 400 }
    );
  }

  try {
    const results = searchIngredients(query);

    return NextResponse.json({
      query,
      count: results.length,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
