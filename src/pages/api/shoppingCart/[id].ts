import { dbConnection } from "@/config/db";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case "DELETE":
      return await deleteProductCart(req, res);

    default:
      return res.status(400).send("Method not allowed");
  }
}

const deleteProductCart = async (req: Request, res: Response) => {
  try {
    await dbConnection.query("DELETE FROM shopping_cart WHERE id = ?", [
      req.query.id,
    ]);

    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
