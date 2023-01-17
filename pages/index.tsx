import Layout from "@/layout";
import { getAirtableBlogData } from "@/utils/apiRequest";
import type { articleType } from "@/types";
import ArticleList from "@/components/ArticleList";

interface Props {
  articles: Array<articleType>;
}

export default function Home({ articles }: Props) {
  return (
    <Layout title="Reach More Audience by Writing and Getting Paid | Quill">
      <section className="w-1/2 mx-auto my-6 pb-10">
        <div className="top-feeds border border-b-0 rounded-t-lg py-2 p-4 font-bold text-xl bg-white">
          Articles
        </div>
        {articles.map((article) => (
          <ArticleList key={article.id} article={article} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const result = await getAirtableBlogData();
  return {
    props: {
      articles: result,
    },
  };
}
