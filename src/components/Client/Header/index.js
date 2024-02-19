import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import TopBar from '~/components/Client/Header/TopBar';
import NavBar from '~/components/Client/Header/NavBar';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollNavbar = () => {
        if (lastScrollY < 100) {
            setShow(true);
        } else if (window.scrollY > lastScrollY && lastScrollY > 100) {
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', scrollNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={cx('header-wrapper', `${!show ? 'header-hidden' : 'header-show'}`)}>
            <Row>
                <TopBar></TopBar>
            </Row>
            <Row>
                <NavBar></NavBar>
            </Row>
        </div>
    );
}

export default Header;
