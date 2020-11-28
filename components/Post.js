import Image from "next/image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Post({ post: { title, date, image, body } }) {
  // console.log("iamge", image);
  let {
    file,
    description,
    file: {
      details: {
        image: { width, height },
      },
    },
  } = image.fields;
  // console.log("body", body?.content[0]);
  return (
    <div className="post">
      <Image
        alt={description}
        src={`https:${file.url}`}
        width={width}
        height={height}
      />

      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
      <div>{documentToReactComponents(body)}</div>
    </div>
  );
}

export default Post;
