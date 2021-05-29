import Hero from "@components/hero/Hero";
import ProjectCard from "@components/project/ProjectCard";

import Clouds from "../../public/cloudy__bg.svg"

import { getHomePage } from "@utils/getContent";

export default function Home({ posts, projects }) {
  return (
    <div className="flex flex-col" style={{ background: "#69153B"}}>
      <Hero />
      <div className="relative w-full">
      <Clouds className="transform rotate-180 absolute top-0 left-0 w-full z-0 pointer-events-none" />

      </div>
      <div className="grid grid-cols-1 gap-20 px-20 z-10" style={{ padding: "30vh 3rem"}}>
        <section>
          <h1 className="text-5xl mb-8 text-center text-white z-10">Projects</h1>
          <div className="grid gap-8 justify-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 500px))"}}>
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
