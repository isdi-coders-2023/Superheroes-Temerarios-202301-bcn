import { rest } from "msw";

const apiUrl = process.env.REACT_APP_HACKANDEAT_URL;
const apiParams = process.env.REACT_APP_PARAMS;
const apiKey = process.env.REACT_APP_API_KEY!;
const dietParam = process.env.REACT_APP_DIET_PARAM;

export const handlers = [
  rest.get(`${apiUrl}${apiParams}${apiKey}${dietParam}`, (req, res, ctx) => {
    const queryParams = req.url.searchParams.getAll(apiKey);
    return res(ctx.status(200), ctx.json(queryParams));
  }),
];

export const errorHandler = [
  rest.get(`${apiUrl}${apiParams}${apiKey}${dietParam}`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
