import PostCard from "@components/post/PostCard";
import ProjectCard from "@components/project/ProjectCard";

import { getHomePage } from "@utils/getContent";

export default function Home({ posts, projects }) {
  return (
    <div className="flex flex-col">
      <div
        data-scroll-section
        className="h-screen flex justify-center items-center text-white"
      >
        <div>
          <h1
            data-scroll
            data-scroll-speed="1"
            className="text-3xl uppercase tracking-widest leading-tight text-gray-200 font -mb-4"
          >
            Adam Kjäll
          </h1>
          <br />
          <h1
            data-scroll
            data-scroll-speed="1.3"
            className="text-7xl tracking-wider"
          >
            new WebDeveloper()
          </h1>
        </div>
      </div>
      <div data-scroll-section className="grid grid-cols-1 gap-20">
        <section data-scroll>
          <h1 className="text-5xl mb-8 text-center text-white">Projects</h1>
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
