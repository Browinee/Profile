import {ResponseComposition, rest, RestRequest} from "msw";
import UserDB from "./data/user";
import {AuthForm} from "../types/authForm";
import {User} from "../types/user";
import {LoginResponseProps} from "../module/auth/usecase/login";

const sleep = () =>
    new Promise(resolve => {
        setTimeout(resolve, 500);
    });
const getToken = (req: any) => req.headers.get("Authorization");

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
    rest.put("/updateUser", async (req: RestRequest<User>, res: ResponseComposition<any>, ctx) => {
        try {
            const token = getToken(req);
            if (!token) {
                return res(ctx.status(401), ctx.json({message: "A token must be provided. Please login again."}));
            }
            await sleep();
            const userInfo = req.body;
            const newUserInfo = await UserDB.save(userInfo);
            return res(ctx.status(200), ctx.json(newUserInfo));
        } catch (e: any) {
            console.log("catch", e);
            // return res(ctx.status(400), ctx.json({message: "Please check param"}));
            return res(ctx.status(500), ctx.json({message: e}));
        }
    }),
    rest.get("/me", async (req: RestRequest<User>, res, ctx) => {
        await sleep();
        const userInfo = await UserDB.getUserInfo();
        return res(ctx.json(userInfo));
    }),
    rest.get("/open-me", async (req: RestRequest<User>, res, ctx) => {
        await sleep();
        const userInfo = await UserDB.getUserInfo();
        return res(ctx.json(userInfo));
    }),
    rest.post("/vanityUrl", async (req: RestRequest<any>, res, ctx) => {
        await sleep();
    }),
];

export {handlers};
