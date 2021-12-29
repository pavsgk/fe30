import '@testing-library/jest-dom';
import Modal from "./Modal";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const testStore = {
  modal: {
    isShown: true,
    actionFn: () => {},
    text: "This is a test modal",
    title: "Test modal",
  },
  getState() {
    return this;
  },
  subscribe() {},
  dispatch() {},
};

describe("Snapshot test", () => {
  test("Should component render", () => {

    const { asFragment } = render(
      <Provider store={testStore}>
        <Modal />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should component hide", () => {

    testStore.modal.isShown = false;

    const { queryByText } = render(
      <Provider store={testStore}>
        <Modal />
      </Provider>)

    expect(queryByText(testStore.modal.title)).not.toBeInTheDocument();
  
  });

});