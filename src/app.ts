import express, { Application } from "express";
import bodyParser from "body-parser";

import connect from "../utils/connect";
import appRouter from "./app.router";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

const dbURI: string = "postgres://oshlnnxd:gYEWtp3iTNfg5lquBBTremkLqMOuZfSE@hattie.db.elephantsql.com:5432/oshlnnxd"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(dbURI);

app.use('/api', appRouter)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
