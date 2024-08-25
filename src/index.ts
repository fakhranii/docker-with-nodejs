import express, { Request, Response } from "express";

const PORT: number = 4000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello last test one</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on ➡ https://127.0.0.1:${PORT}`);
});
// D:\programming\projects\local-projects\nodejs-docker-app
