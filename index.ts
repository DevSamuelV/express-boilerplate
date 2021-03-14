import express from "express";
import helmet from "helmet";

import { json } from "body-parser";
import { Commands } from "./commands/commands";

require("dotenv").config();

const app = express();
const PORT = 6232;

app.use(json());
app.use(helmet());

new Commands(app);

app.listen(PORT, () => console.log("Server is Running"));
