import Image from "next/image";
import type { articleType } from "@/types";

interface Props {
  article: articleType;
}

export default function ArticleList({ article }: Props) {
  const { url, height, width } =
    article.fields["Blog Image"][0].thumbnails.small;
  return (
    <div>
      <div className="top">
        <div className="icon"></div>
        <h5>{article.fields.Author}</h5>
      </div>
      <div className="content">
        <div className="text">
          <h2>{article.fields.Title}</h2>
          <p className="h-10 truncate ellipsis">{article.fields.Blog}</p>
        </div>
        <div className="image">
          <Image
            src={url}
            height={height}
            width={width}
            alt={article.fields.Title}
            blurDataURL={url}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="tag justify-between">
        <ul className="space-x-4">
          {article.fields.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
