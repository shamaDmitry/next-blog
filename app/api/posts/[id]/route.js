import { databases } from "@/appwrite";
import { Query } from "appwrite";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const dataRes = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_DATA_COLLECTION_ID,
      [
        Query.equal('$id', params.id),
      ]
    );

    const data = dataRes.documents;

    if (data.length) {
      return new NextResponse(JSON.stringify(...data), { status: 200 });
    }

    return new NextResponse(JSON.stringify({ data: null }), { status: 404 });
  } catch (e) {
    return new NextResponse("Failed to fetch all post", { status: 500 });
  }
}