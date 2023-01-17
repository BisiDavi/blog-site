import Head from "next/head";
import type { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
