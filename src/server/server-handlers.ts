import {ResponseComposition, rest, RestRequest} from "msw";
import UserDB from "./data/user";
import {AuthForm} from "../types/authForm";
import {User} from "../types/user";
import {LoginResponseProps} from "../module/auth/usecase/login";

const sleep = () =>
    new Promise(resolve => {
        setTimeout(resolve, 500);
    });

const handlers = [
    rest.post("/login", async (req: RestRequest<AuthForm>, res, ctx) => {
        const {username, password} = req.body;
        let loginResponse: LoginResponseProps;
        try {
            await sleep();
            loginResponse = (await UserDB.authenticate({username, password})) as LoginResponseProps;
        } catch (error: any) {
            if (error.message === "Username or Password is wrong") {
                return res(ctx.status(400), ctx.json({message: error.message}));
            }
            return res(ctx.status(500), ctx.json({message: error.stack}));
        }
        return res(ctx.json(loginResponse));
    }),
    rest.put("/updateUser", async (req: RestRequest<{userInfo: User}>, res: ResponseComposition<any>, ctx) => {
        try {
            const {userInfo} = req.body;
            const newUserInfo = await UserDB.save(userInfo);
            return res(ctx.status(200), ctx.json(newUserInfo));
        } catch (e) {
            return res(ctx.status(400), ctx.json({message: "Please check param"}));
        }
    }),
];

export {handlers};
