import { Express } from "express";

export class Login {
  constructor(express: Express) {
    express.post("/about", (req, res) => {
      return res.send({
        error: false,
        message: "express",
        payload: {
          welcome: true,
        },
      });
    });
  }
}
