import axios from "axios";
import type { articleType } from "@/types";

export async function getAirtableBlogData(): Promise<Array<articleType>> {
  return await axios
    .get(
      `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Table 1`,
      {
        params: { view: "Grid view" },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN}`,
        },
      }
    )
    .then((response) => {
      const result: any = [];
      response.data.records.map((item: any) => {
        if (Object.values(item.fields).length !== 0) {
          result.push(item);
        }
      });
      return result;
    });
}
