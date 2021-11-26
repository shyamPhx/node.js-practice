import express from "express";

import {
    genPassword
  } from "../helper.js";
  


const router = express.Router();



router
  .route("/signup")
  .post(async (request, response) => {
    const {username, password} = request.body;
   const hashedPassword = await genPassword(password);

    console.log(hashedPassword);
   response.send({username:username, password:hashedPassword});
  });
  


export const userRouter = router;
