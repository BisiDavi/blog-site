import Head from "next/head";
import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

interface Props {
  title: string;
}

export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <div className="layout bg-lightgray relative h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Reach More Audience by Writing and Getting Paid, Get Started with Quill Today"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LeftSidebar />
      <main>{children}</main>
      <RightSidebar />
      <Footer />
    </div>
  );
}
