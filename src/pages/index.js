import Hero from "@components/hero/Hero";
import ProjectCard from "@components/project/ProjectCard";

import Clouds from "../../public/cloudy.svg"

import { getHomePage } from "@utils/getContent";

export default function Home({ posts, projects }) {
  return (
    <div className="flex flex-col" style={{ background: "#69153B"}}>
      <Hero />
      <div className="relative w-full">
      <Clouds className="transform rotate-180 absolute top-0 left-0 w-full z-0 pointer-events-none -mt-5" />

      </div>
      <div className="grid grid-cols-1 gap-20 z-10 px-10 py-32 md:py-52 lg:py-72" >
        <section id="projects">
          <h1 className="text-3xl lg:text-5xl mb-8 text-center text-white">Projects</h1>
          <div className="grid gap-8 justify-center" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 500px))"}}>
            {projects?.map((project) => (
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
