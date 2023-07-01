import classNames from 'classnames/bind';
import styles from './Advantage.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Advantage({ src, title, note }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={src} alt="advantage" />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('title')}>{title}</h4>
                <h3 className={cx('note')}>{note}</h3>
            </div>
            <div className={cx('tick')}>
                {<FontAwesomeIcon icon={faCircleCheck} />}
            </div>
        </div>
    );
}

Advantage.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
};

export default Advantage;
