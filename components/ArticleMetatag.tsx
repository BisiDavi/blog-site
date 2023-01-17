import Head from "next/head";

import type { articleType } from "@/types";
import toSlug from "@/utils/toSlug";

interface Props {
  article: articleType;
}

export default function ArticleMetatag({ article }: Props) {
  const articleImage = article.fields["Blog Image"][0].thumbnails.large.url;

  let keywords = "";

  article.fields.tags.map((tag) => {
    keywords += `${tag} `;
  });

  console.log("keywords", keywords);
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="theme-color" content="blue" />
      <title>Buy {article.fields.Title} | Quill Blog</title>
      <meta
        name="description"
        content={article.fields.Blog.substring(0, 100)}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" color="#fe6a6a" href="/safari-pinned-tab.svg" />
      {/* open graph */}
      <meta property="og:site_name" content="Livehealthy store" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={article.fields.Title} />
      <meta
        property="og:url"
        content={`https://blog-site-beta-vert.vercel.app/article/${toSlug(
          article.fields.Title
        )}?id=${article.id}`}
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1673996406/Screenshot_2023-01-17_at_11.58.16_PM_chqofk.png"
      />

      {/* Twitter meta */}
      <meta name="twitter:site" content="@https://livehealthy.hk" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:url"
        content={`"https://blog-site-beta-vert.vercel.app/article/${toSlug(
          article.fields.Title
        )}?id=${article.id}`}
      />
      <meta name="twitter:image" content={articleImage} />
      <meta name="twitter:description" content={article.fields.Title} />
      <meta name="twitter:title" content={`${article.fields.Title}`} />
      <meta name="keywords" content={keywords} />

      <script id="articleLDJSon" type="application/ld+json">
        {`
          {
            "@context":"https://schema.org",
            "@type":"BlogPosting",
            "headline": "${article.fields.Title}",
            "alternativeHeadline": "",
            "image": "${articleImage}"
            "award": "Best article ever written",
            "editor": "${article.fields.Author}", 
            "genre": "search engine optimization", 
            "keywords": "${keywords}", 
            "wordcount": "1120",
            "publisher": "Quill Blog",
            "url": "https://blog-site-beta-vert.vercel.app/",
            "datePublished": "2023-01-17",
            "dateCreated": "2023-01-16",
            "dateModified": "2023-01-17",
            "description": "${article.fields.Blog.substring(0, 300)}",
            "articleBody":"${article.fields.Blog}",
              "author": {
                "@type": "Person",
                "name": "${article.fields.Author}", 
            }
          }
        `}
      </script>
    </Head>
  );
}
