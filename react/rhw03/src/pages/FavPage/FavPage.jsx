import styles from "./FavPage.module.scss";
import ShopItem from "../../components/ShopItem";

function FavPage(props) {
  const { goods, toggleFav, addCart, showModal } = props;
  return (
    <div>
        <section className={styles.FavPage}>
        {goods.length > 0 && goods.map(e => 
          e.isFav &&
          <ShopItem {...e} 
            key={e.id} 
            toggleFav={toggleFav} 
            addCart={addCart}
            showModal={showModal}
          />
        )}
        {goods.filter(({isFav}) => isFav).length > 0 || <h3>You don't have any items in favorites</h3>}
      </section>
    </div>
  )
}

export default FavPage;