import express from "express";
import helmet from "helmet";

import { json } from "body-parser";
import { Commands } from "./commands/commands";
import { db } from "./src/db/db";
import { Auth } from "./src/auth/auth";

require("dotenv").config();

const app = express();
const PORT = 6232;

app.use(json());
app.use(helmet());

new Commands(app);
new db();
new Auth();

app.listen(PORT, () => console.log("Server is Running"));
