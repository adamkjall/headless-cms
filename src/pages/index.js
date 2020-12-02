import PostCard from "@components/post/PostCard";
import ProjectCard from "@components/project/ProjectCard";

import { getHomePage } from "@utils/getContent";

export default function Home({ posts, projects }) {
  return (
    <div className="flex flex-col">
      <section>
        <h1 className="text-3xl mb-4">Blog posts</h1>
        <div className="grid grid-cols-2 gap-10">
          {posts?.slice(0, 3).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-3xl mb-4">Projects</h1>
        <div className="grid grid-cols-2 gap-10">
          {projects?.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const { id, title, projects, posts } = await getHomePage();

  return {
    props: {
      id,
      title,
      projects,
      posts,
    },
  };
}
