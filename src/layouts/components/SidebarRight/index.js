import classNames from 'classnames/bind';
import styles from './SidebarRight.module.scss';

import { ItemProduct } from './MenuSidebarRight';
import { itemNewProducts, itemSaleProducts } from '~/data/products';

const cx = classNames.bind(styles);

function SidebarRight() {
    return (
        <aside className={cx('wrapper')}>
            <div>
                <h4 className={cx('title')}>Sản Phẩm Mới</h4>
                {itemNewProducts.map((item) => (
                    <ItemProduct
                        key={item.id}
                        src={item.src}
                        to={item.to}
                        title={item.title}
                        price={item.price}
                        isNew={item.isNew}
                    />
                ))}
            </div>
            <div>
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
            </div>
            <img
                className={cx('poster-sidebar')}
                src="https://i.pinimg.com/474x/14/d3/a5/14d3a596b137c553811d0c8efd40fd03.jpg"
                alt="poster-sidebar"
            />
        </aside>
    );
}

export default SidebarRight;
