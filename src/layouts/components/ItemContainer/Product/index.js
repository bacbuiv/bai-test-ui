import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCoins,
    faGamepad,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
// import { useCart } from 'react-use-cart';
import { useState } from 'react';

import images from '~/acssets/images';

const cx = classNames.bind(styles);

function Product({
    url,
    to = '/',
    title,
    users,
    price,
    item,
    isSale,
    isNew,
    className,
}) {
    // const [succsess, setSuccess] = useState(false);
    // const { addItem } = useCart();

    // const handleButtonAdd = () => {
    //     addItem(item);
    //     setSuccess(true);

    //     setTimeout(() => setSuccess(false), 1000);
    // };

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('img')}>
                <img src={url} alt="img" />
            </div>
            <div className={cx('content')}>
                <i className={cx('title')}>{title}</i>
            </div>
            <a href="./" className={cx('btn-play')}>
                Chơi Ngay
            </a>
            {/* <div>
                <span className={cx('icon')}>
                    {<FontAwesomeIcon icon={faGamepad} />}
                </span>
                <span className={cx('price', 'user')}>{users}</span>
            </div> */}
            {/* {!isSale ? (
                <div>
                    <span className={cx('icon')}>
                        {<FontAwesomeIcon icon={faCoins} />}
                    </span>
                    <span className={cx('price')}>{price}</span>
                </div>
            ) : (
                <del className={cx('price')}>{price}</del>
            )} */}
            {isSale && (
                <img
                    className={cx('tag')}
                    src={images.saleTag}
                    alt="sale-tag"
                />
            )}
            {isNew && (
                <img className={cx('tag')} src={images.hotTag} alt="sale-tag" />
            )}
            {/* <motion.button
                className={cx('add')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.1 }}
                // onClick={handleButtonAdd}
            >
                <FontAwesomeIcon icon={faPlus} />
            </motion.button> */}
            {/* {succsess && (
                <div className={cx('success')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>Thêm sản phẩm thành công</span>
                </div>
            )} */}
        </div>
    );
}

Product.propTypes = {
    url: PropTypes.string.isRequired,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    item: PropTypes.object,
    isSale: PropTypes.bool,
    isNew: PropTypes.bool,
    className: PropTypes.string,
};

export default Product;
