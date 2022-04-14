const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(express.json());
// these are third party middleware
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());

// anything you can do with a promise, you can use async/await

// this is async
function f(a, b) {
  return new Promise((resolve, reject) => {
    if (a + b == 7) {
      reject("we don't like 7's!!");
    }
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

server.get("/", async (req, res, next) => {
  // this is sync we don't need to wait because nothing else will happen
  // console.log(1234)
  // let result = f(1, 3);

  //   this is async
  try {
    let result = await f(4, 2);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }

  //   this is the same as async but only with promises
  //   f(1, 3)
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((err) => {
  //       res.status(500).json(err);
  //     });
  // res.send('blah')
});

// server.get("/:number", (req, res, next) => {
//   // try{

//   // } catch(err) {
//   // this is used to catch errors
//   // } finally {
//   // this always happens, no matter what
//   // }
//   try {
//     console.log("before throw");
//     let result = add_one_if_even(Number(req.params.number));
//     console.log("after throw", result);
//     res.json(result);
//     //   res.send("Hello World!");
//   } catch (err) {
//     res.status(500).json("oopsie, you sent an odd number!");
//   }
// });

// function add_one_if_even(number) {
//   throw_if_odd(number);
//   return number + 1;
// }

// function throw_if_odd(number) {
//   // throw 12345
//   // this logs what you throw
//   // throw is used to handle errors
//   if (number % 2 == 1) {
//     throw new Error("there was an internal server error");
//   } else if(number % 6 == 0){
//       throw new Error("we don't like that number")
//   }
// }

module.exports = server;
