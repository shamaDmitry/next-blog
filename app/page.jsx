import { databases, storage } from "@/appwrite";
import { Query } from "appwrite";

import Title from "@/components/base/Title";
import Link from "next/link";
import classNames from "classnames";
import dayjs from "dayjs";

const Home = async ({ searchParams }) => {
  const page = Number(searchParams.page) || 0
  const pageLimit = 5;
  const offset = pageLimit * page;

  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_DATA_COLLECTION_ID,
    [
      Query.limit(pageLimit),
      Query.offset(offset),
      Query.orderDesc("$createdAt")
    ]
  )

  // const images = await storage.listFiles(
  //   '64c902d4b6bd4ef0cfe4'
  // );

  const pages = data.total / pageLimit;

  return (
    <>
      <Title>
        Latest posts
      </Title>

      {/* <pre>
        {JSON.stringify(images, null, 2)}
      </pre> */}

      <h2 className="mb-4 text-lg font-medium">
        Description of the blog's part
      </h2>

      <div className="flex flex-col">
        {data.documents.map(post => {
          return (
            <Link
              href={`/post/${post.$id}`}
              key={post.$id}
              className="p-4 mb-4 transition border hover:scale-105"
            >
              <div
                className="text-lg font-semibold leading-snug tracking-tight capitalize"
              >
                {post.title}
              </div>

              <time className="flex flex-col pt-2 text-xs">
                {dayjs(post.$createdAt).format("DD/MM/YYYY H:s")}
              </time>
            </Link>
          )
        })}
      </div>

      <div className="flex justify-center mt-auto gap-x-2">
        {
          [...Array(Math.ceil(pages)).keys()].map(index => {
            return (
              <Link
                key={index}
                href={`?page=${index}`}
                className={classNames("border px-3 py-1 font-bold flex items-center justify-center", {
                  "bg-black text-white": page === index
                })}
              >
                {index + 1}
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default Home