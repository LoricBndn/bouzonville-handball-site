import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const CRON_SECRET = process.env.CRON_SECRET;

  if (request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await fetch("https://apbvevehpvdtzejkqlhi.supabase.co/rest/v1/", {
      method: "GET",
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
      },
    });

    return NextResponse.json({ status: "ok", time: new Date().toISOString() });
  } catch (error) {
    console.error("Erreur lors de l'appel à Supabase:", error);
    return NextResponse.json({ status: "error", message: "Supabase call failed" }, { status: 500 });
  }
}