import { dbConnection } from '../../../config/db'
import { useRouter } from 'next/router'

import { Request, Response } from 'express'

export async function query(query: any, values?: any) {
  try {
    const [results] = await dbConnection.execute(query, values);
    dbConnection.end();
    return results;
  } catch (error: any) {
    throw Error(error.message);
    return { error };
  }
}

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case "GET":
      return await getProductSpecific(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await UpdateProduct(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

async function getProductSpecific(req: Request, res: Response) {
  try {
    const result = await dbConnection.query('SELECT * FROM products WHERE id = ?', [
      req.query.id
    ])
    return res.status(200).json(result[0])
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

async function UpdateProduct(req: Request, res: Response) {

  const { query: QueryParam } = useRouter()
  try {

    const productName = req.body.name;
    const productDescription = req.body.description;
    const productPrice = req.body.preice;
    const productImage = req.body.image

    const body = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage
    }

    console.log("REQ::", req)

    await query(
      `UPDATE products SET ? WHERE id = ? `,
      [req.body, req.query.id]
    );

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function deleteProduct(req, res) {
  try {
    await dbConnection.query('DELETE FROM products WHERE id = ?', [req.query.id])
    return res.status(204).json()
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}