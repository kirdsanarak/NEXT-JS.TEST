import { NextResponse } from 'next/server';

// Simple health-check endpoint for backend testing
export async function GET() {
  return NextResponse.json({
    ok: true,
    time: new Date().toISOString(),
  });
}
