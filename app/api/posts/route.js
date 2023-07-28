import { databases } from "@/appwrite";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const data = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_DATA_COLLECTION_ID,
    )

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (e) {
    return new NextResponse("Failed to fetch all post", { status: 500 });
  }
}