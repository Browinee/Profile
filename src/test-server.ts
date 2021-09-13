import { rest } from "msw";
import { setupServer } from "msw/node";
import { repoSearchItemsResponse } from "./types/search";
import { genMock } from "./utils";

const handlers = [
  rest.get(`/search/repositories`, async (req, res, ctx) => {
    const q = req.url.searchParams.get("q");
    const page = req.url.searchParams.get("page");
    if (q === "error") {
      return res(ctx.status(403), ctx.json({ message: "API error" }));
    }
    return res(ctx.json(genMock(10)));
  }),
];
const server = setupServer(...handlers);
export * from "msw";

export { server };
