import CartCalc from "./CartCalc"
import { render } from "@testing-library/react";

describe('Snapshot test', () => {
  test('Should component render', () => {
    const { asFragment } = render(<CartCalc/>);
    
    expect(asFragment()).toMatchInlineSnapshot();
  });
});