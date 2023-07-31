import { headers, cookies } from "next/headers";

import Container from "@/components/base/Container";
import Title from "@/components/base/Title";
import Link from "next/link";

async function getPosts(host) {
  const res = await fetch(`http://${host}/api/posts`);
  return res.json()
}

const Home = async () => {
  const host = headers().get("host");
  const cookieStore = cookies()

  const data = await getPosts(host);
  const { documents } = data;

  return (
    <Container>
      <Title>
        Our Blog
      </Title>

      <div className="flex flex-col">
        <pre className="mb-2">
          {JSON.stringify(host, null, 2)}
        </pre>
        <pre className="mb-2">
          {JSON.stringify(cookieStore, null, 2)}
        </pre>

        {documents.map(post => {
          return (
            <Link
              href={`/post/${post.$id}`}
              key={post.$id}
              className="p-4 mb-4 border"
            >
              {post.title}
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default Home