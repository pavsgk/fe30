import styles from "./FavPage.module.scss";
import ShopItem from "../../components/ShopItem";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

function FavPage() {

  const [goods] = useSelector(({ goods }) => [goods.items, goods.favRerender]);
 
  return (
    <div>
        <section className={styles.FavPage}>
        {goods.length > 0 && goods.map((e, index) => 
          e.isFav &&
          <ShopItem {...e} 
            key={e.id}
            index={index}
            shop={true}
            cart={false}
          />
        )}
        {goods.filter(({isFav}) => isFav).length > 0 || <h3>You don't have any items in favorites</h3>}
      </section>
    </div>
  )
}

FavPage.propTypes = {
  goods: PropTypes.array.isRequired, 
  toggleFav: PropTypes.func.isRequired, 
  addCart: PropTypes.func.isRequired, 
  showModal: PropTypes.func.isRequired,
}


export default FavPage;