import { rest, RestRequest } from "msw";
import UserDB from "./data/user";
import { AuthForm } from "../types/authForm";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

const handlers = [
  rest.post("/login", async (req: RestRequest<AuthForm>, res, ctx) => {
    const { username, password } = req.body;
    let user: any;
    try {
      await sleep();
      user = await UserDB.authenticate({ username, password });
    } catch (error: any) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: error.message })
      );
    }
    return res(ctx.json({ user }));
  }),
];

export { handlers };
