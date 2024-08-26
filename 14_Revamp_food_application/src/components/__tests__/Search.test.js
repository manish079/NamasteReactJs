//Integration Testing
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/resListDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//mock function (This exactly same as 'fetch')
//This fetch return Promise and this Promise return json and this return promise once again, after resolving promise we get data

//   Behind the scene fetch:-
// (Custom fetch / Mock fetch / Fake) because jest don't know what is 'fetch' into 'Body'
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for burger text input", async () => {
  await act(async () => {
    // We need to do mock api because when Body component is rendered then it don't know what is 'fetch' because its browser API. So we need to do mock or fake the api calling
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //check all 20 cards first rendered or not
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  // Now check if the search button is rendered or not
  const searchBtn = screen.getByRole("button", {
    name: "Search",
  });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  //Assertion
  expect(cards.length).toBe(1); //check how many resCard of burger
});

//test cases of topRatedRestaurants
it("Should filter Top Rated Restaurant", async () => {
  await act(async () => {
    // We need to do mock api because when Body component is rendered then it don't know what is 'fetch' because its browser API. So we need to do mock or fake the api calling
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(2);
});
