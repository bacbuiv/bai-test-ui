import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDice,
    faFontAwesome,
    faHomeUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
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
                    title="About Us"
                    to={config.routes.blog}
                    icon={<FontAwesomeIcon icon={faUsers} />}
                />
                <MenuItemSidebar
                    title="All Game"
                    to={config.routes.products}
                    icon={<FontAwesomeIcon icon={faDice} />}
                />
            </MenuSidebar>
            <MenuSidebar>
                <h3>Game Bài</h3>
                <MenuItemSidebar
                    title="Poker"
                    to="./test"
                    src="https://i.pinimg.com/474x/35/bc/72/35bc7230168b3bd93a3e7272776d3dce.jpg"
                />
                <MenuItemSidebar
                    title="Xóc Đĩa"
                    to="./test"
                    src="https://i.pinimg.com/474x/35/bc/72/35bc7230168b3bd93a3e7272776d3dce.jpg"
                />
                <MenuItemSidebar
                    title="Ba Cây"
                    to="./test"
                    src="https://i.pinimg.com/474x/35/bc/72/35bc7230168b3bd93a3e7272776d3dce.jpg"
                />
                <MenuItemSidebar
                    title="Mậu Binh"
                    to="./test"
                    src="https://i.pinimg.com/474x/35/bc/72/35bc7230168b3bd93a3e7272776d3dce.jpg"
                />
            </MenuSidebar>
            <MenuSidebar>
                <h3>Thể Thao</h3>
                <MenuItemSidebar
                    title="Lịch Thi Đấu"
                    to="./test"
                    src="https://i.pinimg.com/474x/ef/0a/e0/ef0ae0aec6a4972c817392c4354c8374.jpg"
                />
                <MenuItemSidebar
                    title="Bảng Cược Châu Âu"
                    to="./test"
                    src="https://i.pinimg.com/474x/ef/0a/e0/ef0ae0aec6a4972c817392c4354c8374.jpg"
                />
                <MenuItemSidebar
                    title="Bảng Cược Châu Á"
                    to="./test"
                    src="https://i.pinimg.com/474x/ef/0a/e0/ef0ae0aec6a4972c817392c4354c8374.jpg"
                />
            </MenuSidebar>
            <MenuSidebar>
                <h3>Xổ Số</h3>
                <MenuItemSidebar
                    title="Xổ Số Miền Bắc"
                    to="./test"
                    src="https://i.pinimg.com/474x/ae/54/a7/ae54a77af41b85448862be78b07f00de.jpg"
                />
                <MenuItemSidebar
                    title="Xổ Số Miền Nam"
                    to="./test"
                    src="https://i.pinimg.com/474x/ae/54/a7/ae54a77af41b85448862be78b07f00de.jpg"
                />
                <MenuItemSidebar
                    title="Xổ Số Miền Miên Trung"
                    to="./test"
                    src="https://i.pinimg.com/474x/ae/54/a7/ae54a77af41b85448862be78b07f00de.jpg"
                />
            </MenuSidebar>
        </aside>
    );
}

export default SideBar;
