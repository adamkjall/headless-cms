import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";

import { fetchEntries } from "@utils/contentfulPosts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto px-4">
        <Header title="Welcome to my app!" />
        <div className="posts ">
          {posts?.map((post) => (
            <Post key={post.date} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((post) => post.fields);
  console.log("posts", posts);
  return {
    props: {
      posts,
    },
  };
}
