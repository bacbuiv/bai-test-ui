import classNames from 'classnames/bind';
import styles from './MenuSidebarRight.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import images from '~/acssets/images';

const cx = classNames.bind(styles);

function ItemProduct({ src, title, price, to, isNew, isSale }) {
    return (
        <NavLink className={cx('menu-product')} to={to}>
            {isNew && (
                <img
                    className={cx('new-tag')}
                    src={images.newTag}
                    alt="newTag"
                />
            )}
            {isSale && (
                <img
                    className={cx('new-tag', 'sale-tag')}
                    src={images.saleTag}
                    alt="newTag"
                />
            )}
            <img className={cx('img')} src={src} alt="news-product" />
            <span className={cx('title')}>{title}</span>
            {!isSale ? (
                <span className={cx('price')}>{price}</span>
            ) : (
                <del className={cx('price')}>{price}</del>
            )}
            <p className={cx('to-game')} href="./">
                Chơi Ngay
            </p>
        </NavLink>
    );
}

ItemProduct.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    isSale: PropTypes.bool,
};

export default ItemProduct;
