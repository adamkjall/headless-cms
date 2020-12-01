import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/footer/Footer";
import PostCard from "@components/post/PostCard";

import { getAllPosts } from "@utils/contentfulPosts";

export default function Home({ posts }) {
  return (
    <div>
      <div className="posts grid grid-cols-1 gap-10">
        {posts?.slice(0, 3).map((post) => (
          <PostCard key={post.fields.date} post={post} />
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
