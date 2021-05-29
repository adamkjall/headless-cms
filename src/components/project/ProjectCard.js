import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  id,
  title,
  date,
  featuredImage,
  excerpt,
  githubLink,
  demoLink,
}) {
  const {
    url,
    details: {
      image: { width, height },
    },
  } = featuredImage.fields?.file;
  return (
    <div className="cursor-pointer bg-white rounded-sm pb-6 shadow-lg flex flex-col align-center text-white">
      <div className="flex justify-center mb-4">
        <Image
          src={`https:${url}`}
          alt={"project image"}
          width={width}
          height={height}
        />
      </div>
      <h2 className="text-2xl text-center text-black ">{title}</h2>
      <pre>
        {/* <p className="whitespace-pre-wrap break-words">{excerpt}</p> */}
      </pre>
    </div>
  );
}
