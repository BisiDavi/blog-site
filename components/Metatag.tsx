import Head from "next/head";

interface Props {
  title: string;
}

export default function Metatag({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="application-name" content="Quill Blog" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="blue" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
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
      <meta name="keywords" content="Blog, Content" />
      <meta property="og:site_name" content="Quill Blog" key="og:site_name" />
      <meta
        property="og:url"
        content="https://blog-site-beta-vert.vercel.app/"
        key="og:url"
      />
      <meta
        property="og:title"
        content="Welcome to Quill Blog, Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
      />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1673996406/Screenshot_2023-01-17_at_11.58.16_PM_chqofk.png"
      />

      {/* Twitter meta */}
      <meta name="twitter:site" content="@https://quillblog." />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:url"
        content="https://blog-site-beta-vert.vercel.app/"
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1673996406/Screenshot_2023-01-17_at_11.58.16_PM_chqofk.png"
      />
      <meta
        name="twitter:description"
        content="Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
      />
      <meta
        name="twitter:title"
        content="Welcome to Quill Blog - Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
      />
      <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://blog-site-beta-vert.vercel.app",
            "content":"https://res.cloudinary.com/verrb-inc/image/upload/v1673996406/Screenshot_2023-01-17_at_11.58.16_PM_chqofk.png"
          }`}
      </script>
    </Head>
  );
}
