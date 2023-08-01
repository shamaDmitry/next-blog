import { headers } from "next/headers";
import Container from "@/components/base/Container";
import Title from "@/components/base/Title";
import Link from "next/link";

import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import dayjs from "dayjs";

async function getPost(host, id) {
  const res = await fetch(`http://${host}/api/posts/${id}`);
  return res.json()
}

const Page = async ({ params }) => {
  const host = headers().get("host");
  const post = await getPost(host, params.id)

  return (
    <Container>
      <Link href="/" className="inline-flex items-center mb-5 font-bold gap-x-2">
        <ArrowLeftCircleIcon className="w-8 text-gray-500" />
        Back
      </Link>

      <div className="px-4 py-2 mb-8 border">
        AI Prompt
      </div>

      <Title>
        {post.title}
      </Title>

      <div className="mb-8 blog-body" dangerouslySetInnerHTML={{ __html: post.body }} />

      <Link href="/" className="inline-flex items-center mb-5 font-bold gap-x-2">
        <ArrowLeftCircleIcon className="w-8 text-gray-500" />
        Back
      </Link>

      <p className="text-sm text-gray-500">
        <span>created: </span>
        <span className="font-bold">
          {dayjs(post.$createdAt).format("DD/MM/YYYY H:s")}
        </span>
      </p>
    </Container>
  );
}

export default Page;
