import { rest } from "msw";

const apiUrl = process.env.REACT_APP_HACKANDEAT_URL!;
const apiKey = process.env.REACT_APP_API_KEY!;
const apiParams = process.env.REACT_APP_API_PARAMS!;

export const handlers = [
  rest.get(`${apiUrl}${apiKey}${apiParams}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ from: 2, to: 2, _links: { next: { href: "" } }, hits: [] })
    );
  }),
];
