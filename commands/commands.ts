import { Express } from "express";
import { Login } from "./v1/about/about";

export class Commands {
  constructor(express: Express) {
    new Login(express);
  }
}
