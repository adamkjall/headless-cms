import Image from "next/image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

import moment from "moment";

export default function Post({ title, date, image, alt, body }) {
  const {
    url,
    details: {
      image: { width, height },
    },
  } = image.fields?.file;

  return (
    <div className="post-view flex flex-col align-center">
      <Image alt={alt} src={`https:${url}`} width={width} height={height} />

      <div className="text">
        <h2 className="text-3xl mt-8">{title}</h2>
        <div>{moment(date).format("MMMM Do YYYY, hh:mm")}</div>
      </div>
      <div>{documentToReactComponents(body, options)}</div>
    </div>
  );
}

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre className="bg-gray-900 p-4 my-2 font-mono text-white whitespace-pre-wrap break-words rounded">
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-10">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        className="text-blue-500 visited:text-purple-600 cursor-pointer"
      >
        {children}
      </a>
    ),
  },
};
