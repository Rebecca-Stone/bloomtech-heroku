const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());

server.get("/", async (req, res, next) => {
  // res.json('Hello, World!');
  res.json({ MESSAGE: process.env.MESSAGE });
  console.log('sanity check')
});

module.exports = server;
