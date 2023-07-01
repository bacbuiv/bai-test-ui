import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import Slider from '~/layouts/components/Slider';
import images from '~/acssets/images';
import {
    Advantage,
    LocationItemContainer,
    ProductItemContainer,
} from '~/layouts/components/ItemContainer';
import { itemNewProducts, itemAllProducts } from '~/data/products';

const cx = classNames.bind(styles);

function Home() {
    const [width, setWidth] = useState(0);
    const slideRef = useRef();

    useEffect(() => {
        setWidth(slideRef.current.scrollWidth - slideRef.current.offsetWidth);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider data={images.slideHome} />
            <div className={cx('advantage')}>
                <Advantage
                    src={images.legit}
                    title="Cam kết chính hãng"
                    note="Bao check legit"
                />
                <Advantage
                    src={images.fast}
                    title="Giao hàng 24h"
                    note="Free ship nội thành"
                />
                <Advantage
                    src={images.cheap}
                    title="Giá thành tốt nhất"
                    note="Chỉ từ 799.000đ"
                />
            </div>
            <motion.div
                className={cx('new-product')}
                whileTap={{ cursor: 'grabbing' }}
                ref={slideRef}
            >
                <h3>Sản Phẩm Mới</h3>
                <motion.div
                    className={cx('slide')}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {itemNewProducts.map((item) => (
                        <ProductItemContainer
                            key={item.id}
                            url={item.src}
                            title={item.title}
                            price={item.price}
                            isNew={item.isNew}
                            item={item}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <div className={cx('poster')}>
                <div className={cx('counter')}>
                    <p className={cx('number')}> Hơn 5.000 Khách hàng</p>
                </div>
                <img src={images.locationPoster} alt="location-poster" />
                <div className={cx('wrapper-location')}>
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="Tp.Hồ Chí Minh"
                        add="381A Sư Vạn Hạnh, Q. 10"
                        tel="0983764669"
                    />
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="Hà Nội"
                        add="75A ngõ 61 Lê Văn Lương, Cầu Giấy"
                        tel="0983764669"
                    />
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="Đà Nẵng"
                        add="126 Lê Duẩn, Hải Châu"
                        tel="0983764669"
                    />
                </div>
            </div>
            <div className={cx('wrapper-product')}>
                <h3>Xem nhiều hơn</h3>
                <div className={cx('all-product')}>
                    {itemAllProducts.map((item) => (
                        <ProductItemContainer
                            key={item.id}
                            className={cx('custom-product')}
                            url={item.src}
                            title={item.title}
                            price={item.price}
                            isNew={item.isNew}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
