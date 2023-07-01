import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartItem({
    src,
    title,
    price,
    quantity,
    onUpQuantity,
    onDownQuantity,
}) {
    return (
        <div className={cx('item-cart')}>
            <div className={cx('img')}>
                <img src={src} alt="cart-img" />
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h5>{title}</h5>
                </div>
                <p className={cx('price')}>{price}</p>
            </div>
            <div className={cx('quantity')}>
                <button className={cx('btn-up')} onClick={onUpQuantity}>
                    {<FontAwesomeIcon icon={faPlus} />}
                </button>
                <p>{quantity}</p>
                <button className={cx('btn-down')} onClick={onDownQuantity}>
                    {<FontAwesomeIcon icon={faMinus} />}
                </button>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onUpQuantity: PropTypes.func,
    onDownQuantity: PropTypes.func,
};

export default CartItem;
