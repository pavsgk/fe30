import CartCalc from "./CartCalc";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

describe("Snapshot test", () => {
  test("Should component render", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CartCalc />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
