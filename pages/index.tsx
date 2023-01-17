import { useEffect } from "react";

import Layout from "@/layout";
import { getAirtableData } from "@/utils/apiRequest";

export default function Home() {
  useEffect(() => {
    getAirtableData().then((response) => {
      const result: any = [];
      console.log("response", response.data);
      response.data.records.map((item:any) => {
        if (Object.values(item.fields).length !== 0) {
          console.log("item", item);
          result.push(item);
        }
      });
      console.log("result", result);
    });
  }, []);

  return (
    <Layout title="Reach More Audience by Writing and Getting Paid | Quill">
      <section></section>
    </Layout>
  );
}
