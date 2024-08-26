import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

//mock function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should Load Restaurant Menu Component ", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });

  //Get Food Panel
  // const accordionHeader = screen.getByText("Recommended (20)");
  const accordionHeader = screen.getByText("Flat Price@199 (34)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(34);

  // Now check click button on add
  const addCartBtn = screen.getAllByRole("button", { name: "Add +" });

  //here I am getting multiple buttons
  fireEvent.click(addCartBtn[1]);
});

//Test case for check header update or not when add to cart
it("should Load Header Component with Cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Flat Price@199 (34)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(34);

  const addCartBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addCartBtn[0]);

  expect(screen.getByText("Cart")).toBeInTheDocument();
});

//test cart page
it("should  Cart Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Flat Price@199 (34)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(36);

  const addCartBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addCartBtn[0]);

  expect(screen.getByText("Cart")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(37); //mix cart of resMenu or cart

  fireEvent.click(screen.getByRole("button", { name: "Clear Carts" }));

  expect(screen.getByText("Add Items to the cart!")).toBeInTheDocument();
});
