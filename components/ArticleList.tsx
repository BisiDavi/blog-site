import Image from "next/image";
import type { articleType } from "@/types";

interface Props {
  article: articleType;
}

export default function ArticleList({ article }: Props) {
  const { url, height, width } =
    article.fields["Blog Image"][0].thumbnails.large;
  return (
    <div className="bg-white border border-b p-4">
      <div className="top">
        <div className="icon"></div>
        <h5 className="font-bold">{article.fields.Author}</h5>
      </div>
      <div className="content flex">
        <div className="text w-1/2 items-center">
          <h2 className="text-xl font-bold">{article.fields.Title}</h2>
          <p className="h-20 text-wrap ">{article.fields.Blog}</p>
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
            <li key={tag} className="border rounded px-4 py-1">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
