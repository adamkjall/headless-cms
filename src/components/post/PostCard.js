import Image from "next/image";
import Link from "next/link";

import { getSlug } from "@utils/getSlug";

export default function PostCard({ post }) {
  const {
    fields: { title, image },
    sys: { id },
  } = post;

  const {
    file,
    description,
    file: {
      details: {
        image: { width, height },
      },
    },
  } = image.fields;

  return (
    <Link href={`/blog/${getSlug(title)}-${id}`}>
      <div className="post cursor-pointer bg-gray-800 p-4 rounded shadow-lg flex flex-col align-center">
        <Image
          alt={description}
          src={`https:${file.url}`}
          width={width}
          height={height}
        />

        <div className="text">
          <h2 className="text-3xl mt-8 text-center text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
