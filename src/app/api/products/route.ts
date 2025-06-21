// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { filterProducts } from '../../lib/data';

// GET /api/products - Return list of products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const category = searchParams.get('category') || undefined;

    const filteredProducts = filterProducts(search, category);

    return NextResponse.json({
      success: true,
      data: filteredProducts,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}