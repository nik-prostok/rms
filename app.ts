import express from "express";
import bodyParser from "body-parser";
const morgan = require('morgan');
import fileUpload from "express-fileupload";
const cors = require('cors');

import connect from "./utils/connect";
import appRouter from "./src/app.router";

const app = express();
const PORT = 8080 || process.env.PORT;

const db = "mongodb+srv://shop:ghjtyubnm@devcluster.taxgx.mongodb.net/RMS?retryWrites=true&w=majority"

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

connect(db);

app.use('/api', appRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
