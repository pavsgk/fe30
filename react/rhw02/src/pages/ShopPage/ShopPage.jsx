import React from 'react'
import styles from "./ShopPage.module.scss";
import ShopItem from '../../components/ShopItem';
import PropTypes from 'prop-types';

class ShopPage extends React.Component {

  render() {
    const { goods, toggleFav, addCart, showModal } = this.props;
    return (
      <section className={styles.ShopPage}>
        {goods.length > 0 && goods.map(e => 
          <ShopItem {...e} 
            key={e.id} 
            toggleFav={toggleFav} 
            addCart={addCart}
            showModal={showModal}
          />
        )}
      </section>
    );
  }
}

ShopPage.propTypes = {
  goods: PropTypes.array.isRequired, 
  toggleFav: PropTypes.func.isRequired, 
  addCart: PropTypes.func.isRequired, 
  showModal: PropTypes.func.isRequired,
}

export default ShopPage;