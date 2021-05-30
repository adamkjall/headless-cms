import Image from "next/image";
import Link from "next/link";
import SVG from 'react-inlinesvg';

export default function ProjectCard({
  id,
  title,
  date,
  featuredImage,
  excerpt,
  githubLink,
  demoLink,
  stack,
  testStack
}) {
  const {
    url,
    details: {
      image: { width, height },
    },
  } = featuredImage.fields?.file;

  console.log("stack", testStack);
  return (
    <div className="cursor-pointer bg-white rounded-sm pb-6 shadow-lg flex flex-col align-center text-white">
      <div className="flex justify-center mb-4 h-42">
        <Image
          src={`https:${url}`}
          alt={"project image"}
          width={width}
          height={height}
          // layout="responsive"
        />
      </div>
      <div className="p-4">

      <h2 className="text-2xl text-center text-black ">{title}</h2>
      {/* <pre>
        <p className="whitespace-pre-wrap break-words">{excerpt}</p>
      </pre> */}
      <div className="flex space-x-2 space-y-2 flex-wrap w-full">
        {stack?.map((s) => (
          <SVG src={`https:${s.fields.file.url}`} className="w-auto h-10" key={s.sys.id} />
          ))}
      </div>
          </div>
    </div>
  );
}
