import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {
    faEllipsisVertical,
    faEnvelope,
    faLanguage,
    faRightFromBracket,
    faCartArrowDown,
    faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from 'react-use-cart';

import images from '~/acssets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';
import Cart from '~/components/Popper/Cart';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Ngôn Ngữ',
        children: {
            title: 'Ngôn Ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    separate: true,
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        separate: true,
    },
    {
        icon: <FontAwesomeIcon icon={faTelegram} />,
        title: 'Telegram',
        href: 'https://www.facebook.com/',
    },
    {
        icon: <FontAwesomeIcon icon={faHeadset} />,
        title: 'Hỗ trợ trực tuyến',
        to: config.routes.home,
    },
];

const MENU_USER = [
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        separate: true,
    },
];

const testCart = [];

function Header() {
    const [showCart, setShowCart] = useState(false);
    const { items } = useCart();
    const currentUser = true;

    // const handleShowCart = () => {
    //     if (items.length > 0) {
    //         setShowCart(!showCart);
    //     } else {
    //         setShowCart(false);
    //         console.log('Giỏ hàng chưa có sản phẩm ...');
    //     }
    // };

    // const handleHide = () => {
    //     setShowCart(false);
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo-header" />
                </Link>
                {/* <Search /> */}
                <div className={cx('login')}>
                    {!currentUser && (
                        <>
                            <Button primary to={config.routes.login}>
                                Đăng Nhập
                            </Button>
                            <Button outline>Đăng Ký</Button>
                        </>
                    )}
                    {/* <Cart
                        data={testCart}
                        showCart={showCart}
                        onHideCart={handleHide}
                    >
                        <button
                            className={cx('cart-btn')}
                            onClick={handleShowCart}
                        >
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </button>
                    </Cart> */}
                    {currentUser && (
                        <>
                            <Button href="./" outline>
                                Rút Tiền
                            </Button>
                            <Button href="./" primary>
                                Nạp Tiền
                            </Button>
                            <div className={cx('info')}>
                                <div className={cx('full-name')}>
                                    Tài khoản Demo
                                </div>
                                <div className={cx('coin')}>9.999.999 $</div>
                            </div>
                        </>
                    )}

                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.6435-9/94888394_2576612495933438_3907613124810768384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=5Wdiz1NCpc4AX8NQO9w&_nc_ht=scontent.fmnl5-2.fna&oh=00_AfB6N6UxoJkKS7MNCAbCEayY1CYuc-_-nDE8kZJa1PMx_w&oe=64B517BD "
                                className={cx('avatar')}
                                alt="avatar-login"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
