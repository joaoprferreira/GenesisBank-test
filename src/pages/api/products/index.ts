import { Request, Response } from "express";
import { dbConnection } from "../../../config/db";

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const results = await dbConnection.query("SELECT * FROM products");
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, description, price, image, category } = req.body;

    const result = await dbConnection.query(
      "INSERT INTO products VALUES (:id, :name, :description, :price, :image, :category)",
      {
        id,
        name,
        description,
        price,
        image,
        category,
      }
    );

    return res.status(200).json({ ...req.body });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
