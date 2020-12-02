import PostView from "@components/post/PostView";
import { getPostById, getAllPosts } from "@utils/getContent";
import { getSlug } from "@utils/getSlug";

export default function Slug({ post }) {
  return (
    <PostView
      key={post.id}
      title={post.title}
      date={post.date}
      image={post.image}
      alt={post.alt}
      body={post.body}
    />
  );
}

export async function getStaticProps({ params }) {
  const id = params?.slug.split("-").pop();
  const post = await getPostById(id);

  return {
    props: {
      post,
    },
    revalidate: 400,
  };
}

export async function getStaticPaths() {
  const postData = await getAllPosts();
  const paths = postData.map(
    (post) => `/blog/${getSlug(post.title)}-${post.id}`
  );

  return {
    paths: paths,
    fallback: false,
  };
}
