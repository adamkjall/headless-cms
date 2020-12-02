import Image from "next/image";
import Link from "next/link";

import moment from "moment";

import { getSlug } from "@utils/getSlug";

export default function PostCard({ id, title, date, image, alt }) {
  const {
    url,
    details: {
      image: { width, height },
    },
  } = image.fields?.file;

  return (
    <Link href={`/blog/${getSlug(title)}-${id}`}>
      <div className="post cursor-pointer bg-gray-800 p-4 rounded shadow-lg flex flex-col align-center">
        <Image alt={alt} src={`https:${url}`} width={width} height={height} />
        <div className="text text-white text-center">
          <h2 className="text-3xl mt-4 mb-2 ">{title}</h2>
          <div>{moment(date).format("MMMM Do YYYY, hh:mm")}</div>
        </div>
      </div>
    </Link>
  );
}
