import express, { Request, Response } from "express";

const PORT = 5000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello ziad</h1>");
});

app.listen(PORT, () => {
  console.log(`App Is Running At Port ${PORT}`);
});
