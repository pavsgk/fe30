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
      </section>
    </div>
  )
}

export default FavPage;