import axios from "axios";

export async function getAirtableBlogData() {
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
      console.log("response", response.data);
      response.data.records.map((item: any) => {
        if (Object.values(item.fields).length !== 0) {
          console.log("item", item);
          result.push(item);
        }
      });
      console.log("result", result);
      return result;
    });
}
