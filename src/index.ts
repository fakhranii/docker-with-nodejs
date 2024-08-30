import express, { Request, Response } from "express";
import connection from "./database-connection/config";

const PORT: number = 4000;
const app = express();

connection();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello last test one from ziad s</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server is running by ${process.env.DB_USER}  https://localhost:${PORT}`
  );
});
// D:\programming\projects\local-projects\nodejs-docker-app
