import Markdown from "markdown-to-jsx";
import type { GetStaticPropsContext } from "next";

import Layout from "@/layout";
import toSlug from "@/utils/toSlug";
import { getAirtableBlogData } from "@/utils/apiRequest";
import type { articleType } from "@/types";
import Image from "next/image";

interface Props {
  article: articleType;
}

export default function ArticlePage({ article }: Props) {
  return (
    <Layout title={article?.fields?.Title} noSidebar>
      {article && (
        <section className="container px-20  mx-auto">
          <Image
            src={article?.fields["Blog Image"][0].thumbnails.full.url}
            height={article?.fields["Blog Image"][0].thumbnails.full.height}
            width={article?.fields["Blog Image"][0].thumbnails.full.width}
            alt={article.fields.Title}
            blurDataURL={article?.fields["Blog Image"][0].thumbnails.full.url}
            placeholder="blur"
          />
          <div className="content">
            <h2 className="text-2xl font-bold my-4">{article.fields.Title}</h2>
            <Markdown
              options={{ forceBlock: true, wrapper: "article" }}
              className="leading-loose"
            >
              {article.fields.Blog}
            </Markdown>
          </div>
        </section>
      )}
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext | any) {
  const result = await getAirtableBlogData();

  const article = result.filter((item) =>
    context.params.slug.includes(toSlug(item.fields.Title))
  )[0];

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const result = await getAirtableBlogData();
  let paramsArray: any = [];
  result.map((item) => {
    paramsArray.push({
      params: {
        slug: `/article/${toSlug(item.fields.Title)}?id=${item.id}`,
      },
    });
  });
  return {
    paths: paramsArray,
    fallback: true,
  };
}
