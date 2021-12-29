import Header from "./Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Snapshot test", () => {
  test("Should component render", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
