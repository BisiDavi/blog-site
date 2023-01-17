import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      try {
        await axios
          .get(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Table 1`
          )
          .then((response) => {
            console.log("response", response.data);
            res.status(200).json(response.data);
          });
      } catch (error: any) {
        res.status(500).json(error.message);
      }
    }
  }
}
