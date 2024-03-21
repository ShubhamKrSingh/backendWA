import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

// get a list of five jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      name: "first",
      content: " joke 1",
    },
    {
      id: 2,
      name: "second",
      content: " joke 2",
    },
    {
      id: 3,
      name: "third",
      content: " joke 3",
    },
    {
      id: 4,
      name: "fourth",
      content: " joke 4",
    },
    {
      id: 5,
      name: "fifth",
      content: " joke 5",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
