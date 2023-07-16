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
    LiveItemContainer,
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
                    src={images.adv1}
                    title="Nhà cái uy tín"
                    note="Sân chơi xanh chín"
                />
                <Advantage
                    src={images.adv2}
                    title="Bảo mật tuyệt đối"
                    note="Thông tin private"
                />
                <Advantage
                    src={images.adv3}
                    title="Nạp rút nhanh chóng"
                    note="Cổng nạp đa dạng"
                />
            </div>
            <motion.div
                className={cx('new-product')}
                whileTap={{ cursor: 'grabbing' }}
                ref={slideRef}
            >
                <h3>Hot Game</h3>
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
                            users={item.users}
                            price={item.price}
                            isNew={item.isNew}
                            item={item}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <div className={cx('poster')}>
                <div className={cx('counter')}>
                    <p className={cx('number')}>89.000.000 $</p>
                    <p>Jackpot hiện tại</p>
                </div>
                <img src={images.jackpot} alt="jackpot" />
                <div className={cx('wrapper-location')}>
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="User Name"
                        add="id: 21321321321"
                        tel="0983764***"
                    />
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="User Name"
                        add="id: 21321321321"
                        tel="0983764***"
                    />
                    <LocationItemContainer
                        src={images.noImage}
                        nameLocation="User Name"
                        add="id: 21321321321"
                        tel="0983764***"
                    />
                </div>
            </div>
            <div className={cx('live-item')}>
                <LiveItemContainer src={images.liveBongDa} />
                <LiveItemContainer src={images.liveXoSo} />
                <LiveItemContainer src={images.liveCasino} />
                <LiveItemContainer src={images.liveCasino} />
            </div>
            <motion.div
                className={cx('new-product', 'new-product')}
                whileTap={{ cursor: 'grabbing' }}
                ref={slideRef}
            >
                <h3>New Game</h3>
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
                            users={item.users}
                            // price={item.price}
                            // isNew={item.isNew}
                            item={item}
                        />
                    ))}
                </motion.div>
            </motion.div>
            {/* <div className={cx('wrapper-product')}>
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
            </div> */}
        </div>
    );
}

export default Home;
