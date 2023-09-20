
import { NextResponse } from "next/server";

const BASE_URL='https://maps.googleapis.com/maps/api/place/textsearch/json?'
const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY
export async function GET(request:any){
    const res=await fetch(
        BASE_URL + "query=Hotels%20in%20Mooresville"+
    "&key=" + GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
    const resp = await res.json();

    return NextResponse.json({ resp });
}