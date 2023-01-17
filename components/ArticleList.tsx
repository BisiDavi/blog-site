import Image from "next/image";
import type { articleType } from "@/types";

interface Props {
  article: articleType;
}

export default function ArticleList({ article }: Props) {
  const { url, height, width } =
    article.fields["Blog Image"][0].thumbnails.large;
  return (
    <div className="bg-white border border-b-0 last:border-b last:rounded-b p-4">
      <div className="top">
        <div className="icon"></div>
        <h5 className="font-medium">{article.fields.Author}</h5>
      </div>
      <div className="content flex space-x-2 items-center">
        <div className="text w-1/2 items-center">
          <h2 className="text-2xl font-bold">{article.fields.Title}</h2>
          <p className="h-40 text-wrap ellipsis my-4">
            {article.fields.Blog.substring(0, 299)}
          </p>
        </div>
        <div className="image w-1/2">
          <Image
            src={url}
            height={height}
            width={width}
            alt={article.fields.Title}
            blurDataURL={url}
            placeholder="blur"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="tag justify-between">
        <ul className="space-x-4 flex my-4">
          {article.fields.tags.map((tag) => (
            <li
              key={tag}
              className="border rounded-lg px-4 py-1 hover:bg-gray-100"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
