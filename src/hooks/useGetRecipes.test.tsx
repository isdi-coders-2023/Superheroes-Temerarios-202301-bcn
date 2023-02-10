import useApiRequest from "./useGetRecipes";
import { renderHook, waitFor } from "@testing-library/react";
import {
  mockDispatch,
  mockLoadRecipesAction,
  mockStore,
} from "../mocks/mockStore";
import MockContextProvider from "../mocks/MockContextProvider";

describe("Given a useApiRequest function", () => {
  describe("When it receives a list of recipes", () => {
    test("Then it should return a recipes with type 'hitsStructure'", async () => {
      const store = mockStore;
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

      expect(mockDispatch).toHaveBeenCalledWith(mockLoadRecipesAction);
    });
  });
});
