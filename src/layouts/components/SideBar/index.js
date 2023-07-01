import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import MenuSidebar, { MenuItemSidebar } from './MenuSidebar';
import config from '~/config';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItemSidebar
                    title="Trang Chủ"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon icon={faHomeUser} />}
                />
                <MenuItemSidebar
                    title="Sản Phẩm"
                    to={config.routes.products}
                    icon={<FontAwesomeIcon icon={faStackOverflow} />}
                />
                <MenuItemSidebar
                    title="Tin Tức"
                    to={config.routes.blog}
                    icon={<FontAwesomeIcon icon={faFontAwesome} />}
                />
            </MenuSidebar>
        </aside>
    );
}

export default SideBar;
