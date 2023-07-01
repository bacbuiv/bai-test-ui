import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function MenuItemSidebar({ title, to, icon }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -200,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1,
            }}
        >
            <NavLink
                className={(nav) => cx('menu-item', { active: nav.isActive })}
                to={to}
            >
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </motion.div>
    );
}

MenuItemSidebar.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItemSidebar;
