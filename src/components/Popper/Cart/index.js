import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import CartItem from './CartItem';

const cx = classNames.bind(styles);

function Cart({ children, data = [], showCart, onHideCart }) {
    const { items, cartTotal, updateItemQuantity, emptyCart } = useCart();

    const renderListCart = () => {
        return items.map((item) => {
            return (
                <CartItem
                    key={item.id}
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    onUpQuantity={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                    }
                    onDownQuantity={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                    }
                />
            );
        });
    };

    return (
        <Tippy
            appendTo={() => document.body}
            visible={showCart && items.length > 0}
            onClickOutside={onHideCart}
            interactive
            placement="bottom-end"
            offset={[15, 10]}
            delay={[0, 300]}
            render={(attrs) => (
                <div className={cx('cart-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('cart-popper')}>
                        <h2>Đơn hàng của bạn</h2>
                        {renderListCart()}
                        <div className={cx('total')}>
                            <h3>Tổng đơn hàng</h3>
                            <p>{cartTotal}</p>
                        </div>
                        <div className={cx('btn')}>
                            <button onClick={emptyCart}>
                                {<FontAwesomeIcon icon={faTrashCan} />} Hủy
                            </button>
                            <button>Tiến hành thanh toán</button>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Cart.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.array,
    showCart: PropTypes.bool.isRequired,
    onHideCart: PropTypes.func,
};

export default Cart;
