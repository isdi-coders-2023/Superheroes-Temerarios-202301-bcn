import { rest } from "msw";

const apiUrl = process.env.REACT_APP_HACKANDEAT_URL!;
const apiKey = process.env.REACT_APP_API_KEY!;
const apiParams = process.env.REACT_APP_API_PARAMS!;

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    const queryParams = req.url.searchParams.getAll(`${apiParams}${apiKey}`);
    return res(ctx.status(200), ctx.json(queryParams));
  }),
];
