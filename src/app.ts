import express, { Application } from "express";
import bodyParser from "body-parser";

import connect from "../utils/connect";
import appRouter from "./app.router";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

const db: string = "mongodb+srv://shop:ghjtyubnm@devcluster.taxgx.mongodb.net/RMS?retryWrites=true&w=majority"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(db);

app.use('/api', appRouter)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
