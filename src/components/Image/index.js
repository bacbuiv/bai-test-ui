import classNames from 'classnames';
import styles from './Image.module.scss';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

import images from '~/acssets/images';

function Image(
    { src, alt, className, imgDefault = images.noImage, ...props },
    ref
) {
    const [imgErr, setImgErr] = useState('');

    const handleImgErr = () => setImgErr(imgDefault);
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)} // Mặc định sẽ luôn có class wrapper, có thể thêm class truyển vào qua props
            ref={ref}
            src={imgErr || src} // Nếu link img bị lỗi || không truyền imgDefault => set img mặc định
            alt={alt}
            {...props}
            onError={handleImgErr}
        />
        /* Comp Image là element con được bọc trong thư viện tippy => tippy cần xác định ref của Comp con để xác định vị trí chính xác hiển thị tooltip => cần forwarRef của thẻ img ra ngoài cho Comp Image nhận */
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    imgDefault: PropTypes.string,
};

export default forwardRef(Image);
