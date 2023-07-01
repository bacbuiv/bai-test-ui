import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    leftIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'; // Với mặc định là thẻ button

    const props = {
        onClick,
        ...passProps,
    }; // Mặc định sẽ có onClick
    if (disabled) {
        delete props.onClick; // Khi vô hiệu hóa nút => cần sử lý ko cho user tương tác
    }
    if (to) {
        props.to = to;
        Comp = Link; // Khi Button có props là to => thẻ Link
    } else if (href) {
        props.href = href;
        Comp = 'a'; // Khi Button có props là href => thẻ a
    }

    const classes = cx('wrapper', {
        primary, // Nếu có props primary => element sẽ đc thêm class primary
        outline,
        text,
        disabled,
        small,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    leftIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
