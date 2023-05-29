import { product } from "@/commons/context/@types/types";
import { dbConnection } from "@/config/db";

import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case "GET":
      return await getProductsShoppingCart(req, res);
    case "POST":
      return await saveProductShoppingCart(req, res);
    case "PUT":
      return await editProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProductsShoppingCart = async (req: Request, res: Response) => {
  try {
    const [rows] = await dbConnection.execute<RowDataPacket[]>(
      `SELECT c.amount, c.total, c.product_id, c.id, 
      p.price, p.name, p.description, p.image, p.category
       FROM shopping_cart c
       JOIN products p ON c.product_id = p.id`
    );

    const carrinho = rows.map((row) => ({
      id: row.id,
      product_id: row.product_id,
      amount: row.amount,
      total: row.total,
      price: row.price,
      produto: {
        id: row.id,
        name: row.name,
        price: row.price,
        description: row.description,
        category: row.category,
        image: row.image,
      },
    }));

    res.status(200).json(carrinho);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProductShoppingCart = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { product_id, amount } = req.body;

  try {
    const [produtoRows] = await dbConnection.execute<RowDataPacket[]>(
      "SELECT * FROM products WHERE id = ?",
      [product_id]
    );

    if (produtoRows.length === 0) {
      res.status(404).json({ error: "Produto não encontrado" });
      return;
    }

    const product = produtoRows[0] as product;

    const total = product.price * amount;

    await dbConnection.execute(
      "INSERT INTO shopping_cart (product_id, amount, total) VALUES (?, ?, ?)",
      [product_id, amount, total]
    );

    res
      .status(200)
      .json({ message: "Item adicionado ao carrinho com sucesso..." });
  } catch (err) {
    console.error("Erro ao adicionar o item ao carrinho:", err);
    res
      .status(500)
      .json({ error: "Erro ao adicionar o item ao carrinho", err });
  }
};

const editProduct = async (req: NextApiRequest, res: Response) => {
  const { body } = req;
  try {
    await dbConnection.execute(
      "UPDATE shopping_cart SET amount = ? WHERE id = ?",
      [body.amount, body.product_id]
    );

    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ message: error });
  }
};
