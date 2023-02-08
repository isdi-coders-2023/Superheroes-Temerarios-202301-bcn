import { rest } from "msw";

const apiUrl = process.env.REACT_APP_HACKANDEAT_URL!;
const apiKey = "498953c8163cbec03246cd4914d809ec";

const params = `field=label&field=image&imageSize=REGULAR&field=foodId&field=dishType&field=calories&field=cuisineType&field=totalNutrients&app_id=3ecd7851&type=public&app_key=${apiKey}`;

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    const queryParams = req.url.searchParams.getAll(params);
    return res(ctx.status(200), ctx.json(queryParams));
  }),
];
