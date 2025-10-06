import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Message reçu :", body);

    return NextResponse.json({ success: true, message: "Message reçu" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Erreur lors du traitement" }, { status: 500 });
  }
}
