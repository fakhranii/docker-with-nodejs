import express, { Request, Response } from "express";
import "reflect-metadata";
import postgreConnection from "./database-connection/postgres-config";

// import mongoConnection from "./database-connection/mongo-config";

const PORT: number = 4000;
const app = express();

// mongoConnection();
postgreConnection();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello last test one from ziad s</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server is running by ${process.env.DB_USER}  https://localhost:${PORT}`
  );
});
