import { RestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data ", () => {
  MOCK_DATA.forEach((data) => {
    render(<RestaurantCard resData={data} />);
  });

  //check resCard successfully render or not
  //Now checking rest is loaded not (searching a name of restaurant)
  const name = screen.getByText("Yenna Dosa");

  expect(name).toBeInTheDocument();
});

//test case
it("should render RestaurantCard component with promoted label ", () => {});
