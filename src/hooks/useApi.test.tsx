import useApi from "./useApi";
import { renderHook, waitFor } from "@testing-library/react";
import { mockDispatch, mockStore } from "../mocks/mockStore";
import MockContextProvider from "../mocks/MockContextProvider";
import { errorHandler } from "../mocks/handlers";
import { server } from "../mocks/server";

const dispatch = mockDispatch;
const store = mockStore;

describe("Given a useApiRequest function", () => {
  describe("When it receives a list of recipes", () => {
    test("Then it should return a recipes with type 'hitsStructure'", async () => {
      const {
        result: {
          current: { getApiRecipes },
        },
      } = renderHook(() => useApi(), {
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

  describe("When it fails to receive a list of recipes", () => {
    beforeEach(() => server.resetHandlers(...errorHandler));
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getApiRecipes },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await waitFor(async () => getApiRecipes());

      expect(dispatch).not.toBeCalled();
    });
  });
});
