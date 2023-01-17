import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Metatag from "@/components/Metatag";

interface Props {
  title: string;
  noSidebar?: boolean;
}

export default function Layout({
  title,
  children,
  noSidebar = false,
}: PropsWithChildren<Props>) {
  return (
    <div className="layout bg-lightgray relative h-screen">
      <Metatag title={title} />
      <Header />
      {!noSidebar && <LeftSidebar />}
      <main>{children}</main>
      {!noSidebar && <RightSidebar />}
      <Footer />
    </div>
  );
}
