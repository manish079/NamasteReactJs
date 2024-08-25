//Integration Testing
import Body from "../Body";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../components/mocks/resListDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

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

it("Should render the Body component with Search", async () => {
  await act(async () => {
    <BrowserRouter>
      render(
      <Body />
      );
    </BrowserRouter>;
  }); // We need to do mock api because when Body component is rendered then it don't know what is 'fetch' because its browser API. So we need to do mock or fake the api calling
});
