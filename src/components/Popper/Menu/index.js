import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // Xác định phần tử cuối mảng

    const renderMenuList = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children; // Kiểm tra phần tử có chứa children hay không

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isChildren) {
                            setHistory((prev) => [...prev, item.children]); // Nếu có child => thêm item.children vào mảng
                        }
                    }}
                />
            );
        });
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    }; // Reset to first page

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            hideOnClick="false"
            offset={[15, 10]}
            delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBackMenu}
                            />
                        )}
                        {renderMenuList()}
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetMenu} // logic thực hiện khi tooltip bị ẩn hoặc mất đi bởi thao tác hover
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;
