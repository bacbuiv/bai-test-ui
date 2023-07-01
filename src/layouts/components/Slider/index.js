import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const variants = {
    initial: {
        x: 200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -200,
        opacity: 0,
    },
};

function Slider({ data }) {
    const [image, setImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImage((prevImage) =>
                prevImage === data.length - 1 ? 0 : prevImage + 1
            );
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);

    const handleNext = () => {
        const x = image === data.length - 1;
        const newX = x ? 0 : image + 1;
        setImage(newX);
    };

    const handlePrev = () => {
        const y = image === 0;
        const newY = y ? data.length - 1 : image - 1;
        setImage(newY);
    };

    return (
        <div className={cx('wrapper')}>
            <motion.img
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                className={cx('img')}
                src={data[image]}
                key={data[image]}
                alt="slide"
            />
            <button className={cx('next')} onClick={handleNext}>
                {<FontAwesomeIcon icon={faCaretRight} />}
            </button>
            <button className={cx('prev')} onClick={handlePrev}>
                {<FontAwesomeIcon icon={faCaretLeft} />}
            </button>
        </div>
    );
}
Slider.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Slider;
