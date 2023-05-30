import mysql, { Pool } from "mysql2/promise";
import { ErrorProps } from "next/error";

const dbConnection: Pool = mysql.createPool({
  namedPlaceholders: true,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  connectionLimit: 10,
});

export { dbConnection };
