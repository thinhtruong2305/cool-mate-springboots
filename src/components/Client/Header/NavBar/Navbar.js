import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import Menu from '~/components/Menu';
import { logoCoolmateNavbar, iconAccountIsLoggedIn, iconAccountWhite, iconCartWhite } from '~/assets';
import { authService } from '~/service/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import useModal from '~/hook/useModal';
import { AuthLayoutWithModal } from '~/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const categories = [
    {
        id: 1,
        name: 'Áo',
        slug: '',
        parentId: 0,
    },
    {
        id: 2,
        name: 'Quần',
        slug: '',
        parentId: 0,
    },
    {
        id: 3,
        name: 'Giày dép',
        slug: '',
        parentId: 0,
    },
    {
        id: 4,
        name: 'Phụ kiện',
        slug: '',
        parentId: 0,
    },
    {
        id: 5,
        name: 'Áo phông',
        slug: '',
        parentId: 1,
    },
    {
        id: 6,
        name: 'Áo len',
        slug: '',
        parentId: 1,
    },
    {
        id: 7,
        name: 'Quần Jean',
        slug: '',
        parentId: 5,
    },
];

const nav = [
    { href: '/Sale', name: 'Sale' },
    { href: '/Shop', name: 'Sản phẩm', children: categories },
];

function NavBar() {
    const [email, setEmail] = useState();
    const { isShowing, toggle } = useModal();
    const navigate = useNavigate();
    const menu = nav.concat(categories);

    const logout = () => {
        authService.logOut();
        navigate(0);
    };

    useEffect(() => {
        const email = authService.getUserEmail();
        setEmail(email);

        // const role = authService.getUserRole();
        // setUserRole(role);
    });

    return (
        <div className={cx('nav-bar-wrapper')}>
            <div className={cx('nav-bar-inner')}>
                <div className={cx('nav-bar-inner-right')}>
                    <div className={cx('nav-bar-logo')}>
                        <Link to="/">
                            <img src={logoCoolmateNavbar} alt="logo-coolmate"></img>
                        </Link>
                    </div>
                    <div className={cx('nav-bar-menu')}>
                        <Menu items={menu}></Menu>
                    </div>
                </div>
                <div className={cx('nav-bar-inner-left')}>
                    <div className={cx('search')}>
                        <form>
                            <button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <input type="text" placeholder="Tìm kiếm sản phẩm"></input>
                        </form>
                    </div>
                    <div className={cx('action')}>
                        {authService.isLoggedIn() ? (
                            <button
                                onClick={() => {
                                    alert('open left sidebar modal');
                                }}
                            >
                                <img src={iconAccountIsLoggedIn} alt="icon-account-logged-in"></img>
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    toggle();
                                }}
                            >
                                <img src={iconAccountWhite} alt="icon-account-unlogged-in"></img>
                            </button>
                        )}
                    </div>
                    <div className={cx('action')}>
                        <Link href="/">
                            <img src={iconCartWhite} alt="icon-mini-cart"></img>
                        </Link>
                        <span className={cx('cart-count')}>1</span>
                    </div>
                </div>
            </div>
            <AuthLayoutWithModal
                isShowing={isShowing}
                toggle={toggle}
                isRegister={false}
                isForgotPassword={false}
            ></AuthLayoutWithModal>
        </div>
    );
}

export default NavBar;
