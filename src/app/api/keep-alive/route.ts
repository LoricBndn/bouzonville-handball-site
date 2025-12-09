export async function GET() {
  await fetch("https://apbvevehpvdtzejkqlhi.supabase.co/rest/v1/", {
    method: "GET",
    headers: {
      apikey: process.env.SUPABASE_ANON_KEY!,
    },
  });

  return Response.json({ status: "ok", time: new Date().toISOString() });
}
