import PostView from "@components/post/PostView";
import { getPostById, getAllPosts } from "@utils/contentfulPosts";
import { getSlug } from "@utils/getSlug";

export default function Slug({ post }) {
  return (
    <div className="posts ">
      <PostView key={post.date} post={post} />
    </div>
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
    (post) => `/blog/${getSlug(post.fields.title)}-${post.sys.id}`
  );

  return {
    paths: paths,
    fallback: false,
  };
}
