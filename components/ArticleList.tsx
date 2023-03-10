import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";

import getUserInitials from "@/utils/getUserInitials";
import type { articleType } from "@/types";
import toSlug from "@/utils/toSlug";

interface Props {
  article: articleType;
}

export default function ArticleList({ article }: Props) {
  const { url, height, width } =
    article.fields["Blog Image"][0].thumbnails.large;
  const titleSlug = toSlug(article.fields.Title);
  return (
    <Link href={`/article/${titleSlug}?id=${article.id}`}>
      <div className="bg-white border last:border-b-0  hover:bg-gray-50 p-4 px-6">
        <div className="top">
          <div className="author flex items-center space-x-2 my-4">
            <div className="icon font-bold bg-gray-900 text-white p-2 rounded-full w-10 flex items-center justify-center">
              {getUserInitials(article.fields.Author)}
            </div>
            <h5 className="font-medium">{article.fields.Author}</h5>
          </div>
        </div>
        <div className="content flex space-x-2 items-center">
          <div className="text w-1/2 items-center">
            <h2 className="text-2xl font-bold">{article.fields.Title}</h2>
            <Markdown>{article.fields.Blog.substring(0, 299)}</Markdown>
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
                className="border rounded-lg px-4 py-1 hover:bg-gray-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
