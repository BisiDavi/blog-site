import { useEffect } from "react";

import Layout from "@/layout";
import { getAirtableData } from "@/utils/apiRequest";

export default function Home() {
  useEffect(() => {
    getAirtableData().then((response) =>
      console.log("response", response.data)
    );
  }, []);

  return (
    <Layout title="Reach More Audience by Writing and Getting Paid | Quill">
      <section></section>
    </Layout>
  );
}
