import PostCard from "@components/post/PostCard";

import { getAllPosts } from "@utils/contentfulPosts";

export default function BlogPage({ posts }) {
  return (
    <div className="posts grid grid-cols-2 gap-10">
      {posts?.map((post) => (
        <PostCard key={post.fields.date} post={post} />
      ))}
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
