import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get('/api', (req:Request,res: Response) => {
    res.json({message:'Hello'});
})

app.listen(5000, () => console.log('Server running...'))

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");

    console.log("Loading users from the database...");

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
