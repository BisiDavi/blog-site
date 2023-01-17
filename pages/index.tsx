import Layout from "@/layout";
import { getAirtableBlogData } from "@/utils/apiRequest";

interface Props {
  articles: Array<{
    id: string;
    fields: {
      "Blog Image": [];
      Author: string;
      tags: string[];
      Blog: string;
      Title: string;
    };
    createdTime: Date;
  }>;
}

export default function Home({ articles }: Props) {
  console.log("articles", articles);

  return (
    <Layout title="Reach More Audience by Writing and Getting Paid | Quill">
      <section></section>
    </Layout>
  );
}

export async function getStaticProps() {
  const result = await getAirtableBlogData();
  console.log("result", result);
  return {
    props: {
      articles: result,
    },
  };
}
