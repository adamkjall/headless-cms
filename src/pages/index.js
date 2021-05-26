import PostCard from "@components/post/PostCard";
import ProjectCard from "@components/project/ProjectCard";

import { getHomePage } from "@utils/getContent";

export default function Home({ posts, projects }) {
  return (
    <div className="flex flex-col">
      <div className="h-screen -mt-28 flex justify-center items-center">
        <h1 className="text-7xl"></h1>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <section>
          <h1 className="text-5xl mb-8 text-center">Blog posts</h1>
          <div className="grid grid-cols-1 gap-20">
            {posts?.slice(0, 3).map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-5xl mb-8 text-center">Projects</h1>
          <div className="grid grid-cols-1 gap-20">
            {projects?.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      </div>
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
