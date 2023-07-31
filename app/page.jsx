import { headers } from "next/headers";

import Title from "@/components/base/Title";
import Link from "next/link";

async function getPosts(host) {
  const res = await fetch(`http://${host}/api/posts`);
  return res.json();
}

const Home = async () => {
  const host = headers().get("host");
  const data = await getPosts(host);
  const { documents, totalDocs } = data;
  const pages = totalDocs / 5;

  return (
    <>
      <Title>
        part 1
      </Title>

      <div className="flex flex-col">
        {documents.map(post => {
          return (
            <Link
              href={`/post/${post.$id}`}
              key={post.$id}
              className="p-4 mb-4 border"
            >
              <div className="text-lg font-semibold leading-snug tracking-tight">
                {post.title}
              </div>
            </Link>
          )
        })}
      </div>
      {/* {
        Array.from(Array(pages).keys()).map(page => {
          console.log('sasaasassa', page);
          return (
            <Link
              href={`/api/posts?page=${page + 1}`}
            >
              {page + 1}
            </Link>
          )
        })
      } */}
    </>
  )
}

export default Home