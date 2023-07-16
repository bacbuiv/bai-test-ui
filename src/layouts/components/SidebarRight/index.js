import classNames from 'classnames/bind';
import styles from './SidebarRight.module.scss';

import { ItemProduct } from './MenuSidebarRight';
import { itemNewProducts, itemSaleProducts } from '~/data/products';
import images from '~/acssets/images';

const cx = classNames.bind(styles);

function SidebarRight() {
    return (
        <aside className={cx('wrapper')}>
            <div>
                <h4 className={cx('title')}>Hot Game</h4>
                {itemNewProducts.map((item) => (
                    <ItemProduct
                        key={item.id}
                        src={item.src}
                        to={item.to}
                        title={item.title}
                        // price={item.price}
                        // isNew={item.isNew}
                    />
                ))}
            </div>
            {/* <div>
                <h4 className={cx('title')}>Sản Phẩm Đang Sale</h4>
                {itemSaleProducts.map((item) => (
                    <ItemProduct
                        key={item.id}
                        src={item.src}
                        to={item.to}
                        title={item.title}
                        price={item.price}
                        isSale={item.isSale}
                    />
                ))}
            </div> */}
            <img
                className={cx('poster-sidebar')}
                src={images.adhih}
                alt="poster-sidebar"
            />
            <div>
                <h4 className={cx('title')}>Game Đề Xuất</h4>
                {itemNewProducts.map((item) => (
                    <ItemProduct
                        key={item.id}
                        src={item.src}
                        to={item.to}
                        title={item.title}
                        // price={item.price}
                        // isNew={item.isNew}
                    />
                ))}
            </div>
        </aside>
    );
}

export default SidebarRight;
