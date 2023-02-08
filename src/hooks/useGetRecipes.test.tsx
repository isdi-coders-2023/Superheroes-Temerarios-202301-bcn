import useApiRequest from "./useGetRecipes";
import { renderHook, act, waitFor } from "@testing-library/react";
import { HitsStructure } from "../data/data";
import RecipesContext from "../store/contexts/recipes/RecipesContext";
import {
  mockDispatch,
  mockLoadRecipesAction,
  mockStore,
} from "../mocks/mockStore";
import MockContextProvider from "../mocks/MockContextProvider";

const dispatch = mockDispatch;
const store = mockStore;
const loadRecipesAction = mockLoadRecipesAction;

describe("Given a useApiRequest function", () => {
  describe("When it receives a list of recipes", () => {
    test("Then it should return a recipes with type 'hitsStructure'", async () => {
      const {
        result: {
          current: { getApiRecipes },
        },
      } = renderHook(() => useApiRequest(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await waitFor(async () => getApiRecipes());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
