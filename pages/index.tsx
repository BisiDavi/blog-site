import Layout from "@/layout";
import { getAirtableBlogData } from "@/utils/apiRequest";
import type { articleType } from "@/types";

interface Props {
  articles: Array<articleType>;
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
