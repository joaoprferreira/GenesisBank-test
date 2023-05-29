import { query } from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await query({
      query: "SELECT * FROM products",
      values: [],
    });

    res.status(200).json({ products: products });
  }
}
