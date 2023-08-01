import { databases } from "@/appwrite";
import { Query } from "appwrite";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page'))
  const pageLimit = 5;
  const offset = pageLimit * page;

  try {
    const currentPage = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_DATA_COLLECTION_ID,
      [
        Query.limit(pageLimit),
        Query.offset(offset)
      ]
    )

    const nextPage = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_DATA_COLLECTION_ID,
      [
        Query.limit(pageLimit),
        Query.offset(offset + pageLimit)
      ]
    )

    // return new NextResponse(JSON.stringify({
    //   current: currentPage,
    //   next: nextPage
    // }))

    if (currentPage.documents.length) {
      return new NextResponse(JSON.stringify({
        totalDocs: currentPage.total,
        documents: currentPage.documents,
        page: page,
        next: !!nextPage.documents.length
      }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({
        totalDocs: 0,
        documents: null,
        page: page
      }), { status: 404 });
    }
  } catch (e) {
    return new NextResponse("Failed to fetch all post", { status: 500 });
  }
}