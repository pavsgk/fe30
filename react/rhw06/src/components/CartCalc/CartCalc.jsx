import { shallowEqual, useSelector } from "react-redux";

function CartCalc () {
  const [cart, goods] = useSelector(store => [store.cart.items, store.goods.items], shallowEqual);
  
  const objGoods = goods.map(e => e.id).reduce((acc, current, index) => {
    acc[current] = goods[index];
    return acc;
  }, {});

  const price = cart.map(e => {
    if (objGoods.hasOwnProperty(e.id)) {
      return parseFloat(objGoods[e.id].price) * e.count
    }
    return 0;})
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  return (
    <>
      <hr />
      <h3>TOTAL: {price}</h3>
    </>
  )
}

export default CartCalc;