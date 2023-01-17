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
  console.log("article", article);
  const { url, height, width } =
    article?.fields["Blog Image"][0].thumbnails.full;
  return (
    <Layout title={article.fields.Title} noSidebar>
      <section className="container px-20  mx-auto">
        <Image
          src={url}
          height={height}
          width={width}
          alt={article.fields.Title}
          blurDataURL={url}
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
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext | any) {
  console.log("context.params", context.params);
  console.log("context", context);
  const result = await getAirtableBlogData();

  const articleObj = result.filter(
    (item) => toSlug(item.fields.Title) === context.params.slug
  )[0];

  return {
    props: {
      article: articleObj,
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
  console.log("paramsArray", paramsArray);
  return {
    paths: paramsArray,
    fallback: true,
  };
}
