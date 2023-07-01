import classNames from 'classnames/bind';
import styles from './Location.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Location({ src, nameLocation, add, tel }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avt')}>
                <img src={src} alt="avt" />
            </div>
            <div className={cx('content')}>
                <h3>{nameLocation}</h3>
                <p className={cx('add')}>{add}</p>
                <p className={cx('tel')}>{tel}</p>
            </div>
        </div>
    );
}

Location.propTypes = {
    src: PropTypes.string.isRequired,
    nameLocation: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
};

export default Location;
