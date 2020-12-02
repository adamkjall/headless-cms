import PostCard from "@components/post/PostCard";

import { getAllPosts } from "@utils/getContent";

export default function Home({ posts }) {
  return (
    <div>
      <div className="posts grid grid-cols-1 gap-10">
        {posts?.slice(0, 3).map((p) => (
          <PostCard
            key={p.id}
            id={p.id}
            title={p.title}
            date={p.date}
            image={p.image}
            alt={p.alt}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
