import classNames from 'classnames/bind';
import styles from './ResultItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ResultItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.full_name}</h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

ResultItem.propTypes = {
    data: PropTypes.object.isRequired,
    // PropTypes sẽ yêu cầu bắt buộc data truyền vào phải là 1 obj
    // ... isRequired bắt buộc phải có props truyền vào, ở đây là data
};

export default ResultItem;
