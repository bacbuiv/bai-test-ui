import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LiveItemContainer({ src }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={src} alt="img-liveItem" />
                <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
            </div>
            <a href="./">Go To Live</a>
        </div>
    );
}

export default LiveItemContainer;
