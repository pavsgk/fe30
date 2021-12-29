import ShopItem from "./ShopItem";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const testStore = {
  goods: {
    items: [
      {
        id: 0,
        name :"Birhday",
        price :"290.95",
        image :"https://media.istockphoto.com/photos/birthday-cake-picture-id812908632?k=20&m=812908632&s=612x612&w=0&h=r_HtCSEJe4vz2c-RX-rPChFY9l50nsl9PXdGRoqkJmQ=",
        sku :"bc101",
        color :"purple",
        isFav : true,
      }]
  },
  favRerender: false,
  getState() {
    return this;
  },
  subscribe() {},
  dispatch() {},
};

describe("Snapshot test", () => {
  test("Should component render", () => {
    
    const props = testStore.goods.items[0];

    const { asFragment } = render(
      <Provider store={testStore}>
        <ShopItem index={0} {...props}/>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
