import classNames from 'classnames/bind';
import styles from './MailPage.module.scss';

const cx = classNames.bind(styles);

function MailPage() {
    return (
        <div className={cx('wrapper')}>
            <h3>MailPage</h3>
        </div>
    );
}

export default MailPage;
