import classNames from 'classnames/bind';
import styles from './Products.module.scss';

import Slider from '~/layouts/components/Slider';
import images from '~/acssets/images';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <Slider data={images.slideProfile} />
        </div>
    );
}

export default Products;
