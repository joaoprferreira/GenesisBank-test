import { dbConnection } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (_, res) => {
  try {
    const results = await dbConnection.query("SELECT * FROM products");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { id, name, description, price, image } = req.body;

    const result = await dbConnection.query(
      "INSERT INTO products VALUES (:id, :name, :description, :price, :image)",
      {
        id,
        name,
        description,
        price,
        image,
      }
    );

    return res.status(200).json({ ...req.body, id: result.id });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
