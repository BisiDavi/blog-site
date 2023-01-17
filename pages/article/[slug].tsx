import type { GetStaticPropsContext } from "next";

import Layout from "@/layout";
import toSlug from "@/utils/toSlug";
import { getAirtableBlogData } from "@/utils/apiRequest";
import type { articleType } from "@/types";

interface Props {
  article: articleType;
}

export default function ArticlePage({ article }: Props) {
  console.log("article", article);
  return (
    <Layout title="">
      <section></section>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext | any) {
  console.log("context.params", context.params);
  console.log("context", context);
  const result = await getAirtableBlogData();

  const article = result.filter(
    (item) => toSlug(item.fields.Title) === context.params.slug
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
  console.log("paramsArray", paramsArray);
  return {
    paths: paramsArray,
    fallback: true,
  };
}
