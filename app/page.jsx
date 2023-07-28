"use client";
import Container from "@/components/base/Container";
import Title from "@/components/base/Title";
import { useEffect, useState } from "react";

// async function getPosts() {
//   const res = await fetch(`/api/posts`)
//   return res.json()
// }

const Home = () => {
  // const data = await getPosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(res => {
        setPosts(res.documents)
      })
    return () => {
    };
  }, []);

  return (
    <Container>
      <Title>
        Our Blog
      </Title>

      <div>
        {posts.map(post => {
          return (
            <div
              key={post.$id}
              className="p-4 mb-4 border"
            >
              {post.title}
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Home