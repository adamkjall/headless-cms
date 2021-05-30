import Image from "next/image";
import Link from "next/link";
import SVG from "react-inlinesvg";

import GithubIcon from "../../../public/github.svg";
import GlobeIcon from "public/globe.svg";

import styles from "./styles.module.scss";

export default function ProjectCard({
  id,
  title,
  date,
  featuredImage,
  excerpt,
  githubLink,
  demoLink,
  stack,
  testStack,
}) {
  const {
    url,
    details: {
      image: { width, height },
    },
  } = featuredImage.fields?.file;

  console.log("stack", testStack);
  return (
    <div
      className={`${styles.card} relative cursor-pointer bg-white rounded-sm shadow-lg flex flex-col align-center text-white`}
    >
      <div
        className={`${styles.imgContainer} flex justify-center aspect-w-16 aspect-h-9`}
      >
        <Image
          src={`https:${url}`}
          alt={"project image"}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
        />
      </div>
      <div className="p-4">
        {/* <pre>
        <p className="whitespace-pre-wrap break-words">{excerpt}</p>
      </pre> */}
        <div
          className={`${styles.overlay} absolute inset-0 pointer-events-none flex justify-center items-center`}
        >
          <h2 className={`text-3xl text-center text-white bold`}>{title}</h2>
        </div>
        <h2 className={`${styles.title} text-2xl text-center text-black`}>
          {title}
        </h2>
        {stack && (
          <div
            className={`${styles.technologies} absolute bottom-0 left-0 flex flex-wrap justify-center items-center w-full space-x-4 space-y-2 bg-white  px-2 py-3`}
          >
            {stack?.map((s) => (
              // use react inline svg to render external SVG
              <SVG
                src={`https:${s.fields.file.url}`}
                className="w-auto h-8"
                key={s.sys.id}
              />
            ))}
          </div>
        )}
        <div
          className={`${styles.links} absolute top-0 left-0 w-full flex py-3`}
        >
          {githubLink && (
            <a href={githubLink} target="_blank" className="transform -translate-x-full pl-2">
              <GithubIcon className="h-8 w-auto" />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" className="transform translate-x-full pr-2 ml-auto">
              <GlobeIcon className="h-8 w-auto" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
